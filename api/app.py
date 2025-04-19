from flask import Flask, request, jsonify
import pandas as pd
import joblib
import numpy as np
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Load the saved model, label encoder, and feature information
model = joblib.load("random_forest_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")

# Load or define the expected feature information
# Ideally, this would be saved during training, but we can define it here
expected_features = [
    "Longest_Session_Duration",
    "Minutes_Streamed_Per_Day",
    "Subscription_Type",
]
numeric_features = ["Longest_Session_Duration", "Minutes_Streamed_Per_Day"]
categorical_features = ["Subscription_Type"]
expected_categories = {"Subscription_Type": ["Premium", "Free"]}

print(f"Model loaded successfully")
print(f"Label encoder loaded with classes: {label_encoder.classes_}")
print(f"Expected features: {expected_features}")


@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get data from request
        data = request.get_json()
        print(f"Received data: {data}")  # Add this for debugging

        # Validate required features are present
        missing_features = [
            f
            for f in expected_features
            if f.lower().replace("_", "")
            not in [k.lower().replace("_", "") for k in data.keys()]
        ]

        if missing_features:
            return (
                jsonify({"error": f"Missing required features: {missing_features}"}),
                400,
            )

        # Extract and normalize feature names (handle variations in input keys)
        feature_map = {}
        for key in data:
            normalized_key = key.lower().replace("_", "")
            for expected in expected_features:
                if expected.lower().replace("_", "") == normalized_key:
                    feature_map[expected] = key

        # Extract features
        try:
            longest_session = float(
                data[
                    feature_map.get(
                        "Longest_Session_Duration", "longest_session_duration"
                    )
                ]
            )
            minutes_streamed = float(
                data[
                    feature_map.get(
                        "Minutes_Streamed_Per_Day", "minutes_streamed_per_day"
                    )
                ]
            )
            subscription_type = data[
                feature_map.get("Subscription_Type", "subscription_type")
            ]
        except (ValueError, KeyError) as e:
            return jsonify({"error": f"Invalid data format: {str(e)}"}), 400

        # Validate subscription type
        if subscription_type not in expected_categories["Subscription_Type"]:
            return (
                jsonify(
                    {
                        "error": f'Invalid subscription type. Must be one of {expected_categories["Subscription_Type"]}'
                    }
                ),
                400,
            )

        # Create a DataFrame with the input data using the expected feature names
        input_df = pd.DataFrame(
            {
                "Longest_Session_Duration": [longest_session],
                "Minutes_Streamed_Per_Day": [minutes_streamed],
                "Subscription_Type": [subscription_type],
            }
        )

        # Verify the input dataframe has all required features
        if not all(feature in input_df.columns for feature in expected_features):
            missing = [f for f in expected_features if f not in input_df.columns]
            return (
                jsonify({"error": f"Missing features in processed input: {missing}"}),
                400,
            )

        # Make prediction
        prediction_encoded = model.predict(input_df)

        # Convert encoded prediction back to original label
        prediction = label_encoder.inverse_transform(prediction_encoded)

        # Return prediction and confidence scores if available
        response = {
            "prediction": prediction[0],
            "input_data": {
                "longest_session_duration": longest_session,
                "minutes_streamed_per_day": minutes_streamed,
                "subscription_type": subscription_type,
            },
        }

        # If the model has predict_proba, include class probabilities
        try:
            proba = model.predict_proba(input_df)[0]
            class_probabilities = {
                label_encoder.classes_[i]: float(proba[i])
                for i in range(len(label_encoder.classes_))
            }
            response["class_probabilities"] = class_probabilities
        except AttributeError:
            pass  # Skip if predict_proba is not available

        return jsonify(response)

    except Exception as e:
        import traceback

        error_traceback = traceback.format_exc()
        print(f"Error in predict endpoint: {str(e)}")
        print(f"Traceback: {error_traceback}")
        return jsonify({"error": str(e), "traceback": error_traceback}), 500


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify(
        {
            "status": "ok",
            "model_loaded": True,
            "label_encoder_classes": list(label_encoder.classes_),
            "expected_features": expected_features,
            "numeric_features": numeric_features,
            "categorical_features": categorical_features,
            "expected_categories": expected_categories,
        }
    )


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
