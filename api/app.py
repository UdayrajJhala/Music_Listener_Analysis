from flask import Flask, request, jsonify
import pandas as pd
import joblib
import os
import traceback
from flask_cors import CORS  # Import the flask_cors extension


# Create Flask app
app = Flask(__name__)
CORS(app)
# Global variables to store model and features
model = None
features = None
model_load_error = None


# Try to load the model and features
def load_model():
    global model, features, model_load_error
    try:
        # Get the directory of the current script
        base_dir = os.path.dirname(os.path.abspath(__file__))

        # Construct full paths to model files
        model_path = os.path.join(base_dir, "streaming_segment_model.pkl")
        features_path = os.path.join(base_dir, "model_features.pkl")

        # Check if files exist
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model file not found at: {model_path}")
        if not os.path.exists(features_path):
            raise FileNotFoundError(f"Features file not found at: {features_path}")

        # Load the files
        model = joblib.load(model_path)
        features = joblib.load(features_path)
        print("Model and features loaded successfully!")
        return True
    except Exception as e:
        model_load_error = str(e)
        traceback.print_exc()
        print(f"Error loading model or features: {e}")

        # Set placeholder values for features if not loaded
        features = [
            "Age",
            "Country",
            "Streaming_Platform",
            "Top_Genre",
            "Minutes_Streamed_Per_Day",
            "Number_of_Songs_Liked",
            "Most_Played_Artist",
            "Subscription_Type",
            "Listening_Time",
            "Discover_Weekly_Engagement",
            "Repeat Song Rate (%)",
        ]
        return False


# Load the model at startup
model_loaded = load_model()


@app.route("/predict", methods=["POST"])
def predict():
    if not model_loaded:
        return (
            jsonify(
                {"error": f"Model not loaded: {model_load_error}", "success": False}
            ),
            503,
        )  # Service Unavailable

    try:
        # Get JSON data from request
        data = request.json

        # Validate input - check if all required features are present
        missing_features = [f for f in features if f not in data]
        if missing_features:
            return (
                jsonify(
                    {
                        "error": f'Missing required features: {", ".join(missing_features)}',
                        "required_features": features,
                    }
                ),
                400,
            )

        # Create a DataFrame with the input data (single row)
        input_df = pd.DataFrame([data])

        # Make prediction
        prediction = model.predict(input_df)[0]

        # Return prediction
        return jsonify({"streaming_segment": prediction, "success": True})

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e), "success": False}), 500


@app.route("/health", methods=["GET"])
def health():
    return jsonify(
        {
            "status": "healthy",
            "model_loaded": model_loaded,
            "model_error": model_load_error if not model_loaded else None,
            "working_directory": os.getcwd(),
            "files_in_directory": os.listdir("."),
        }
    )


@app.route("/reload-model", methods=["POST"])
def reload_model():
    global model_loaded
    model_loaded = load_model()
    return jsonify(
        {
            "success": model_loaded,
            "error": model_load_error if not model_loaded else None,
        }
    )


@app.route("/", methods=["GET"])
def home():
    # Return documentation about the API
    return jsonify(
        {
            "name": "Streaming Segment Prediction API",
            "model_loaded": model_loaded,
            "endpoints": {
                "/predict": {
                    "method": "POST",
                    "description": "Predict streaming segment based on user data",
                    "required_features": features,
                    "example_input": {
                        "Age": 34,
                        "Country": "Japan",
                        "Streaming_Platform": "Tidal",
                        "Top_Genre": "Reggae",
                        "Minutes_Streamed_Per_Day": 295,
                        "Number_of_Songs_Liked": 138,
                        "Most_Played_Artist": "Adele",
                        "Subscription_Type": "Free",
                        "Listening_Time": "Afternoon",
                        "Discover_Weekly_Engagement": 47.42,
                        "Repeat Song Rate (%)": 16.74,
                    },
                },
                "/health": {"method": "GET", "description": "Check API health status"},
                "/reload-model": {
                    "method": "POST",
                    "description": "Attempt to reload the model files",
                },
            },
        }
    )


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
