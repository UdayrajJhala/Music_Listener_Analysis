import streamlit as st
import pandas as pd
import joblib
import numpy as np

# Load the saved model and features
model = joblib.load('streaming_segment_model.pkl')
features = joblib.load('model_features.pkl')

# Set page title
st.title('Music Streaming Segment Predictor')

st.write("""
This app predicts the streaming segment of a user based on their listening habits and preferences.
Fill in the details below to get a prediction!
""")

# Create input fields for user data
col1, col2 = st.columns(2)

with col1:
    age = st.number_input('Age', min_value=12, max_value=100, value=30)
    
    # Get unique countries from your dataset, replace with your actual data
    countries = ['Japan', 'Germany', 'Australia', 'South Korea', 'United States', 'United Kingdom', 'Canada', 'France']
    country = st.selectbox('Country', sorted(countries))
    
    # Get unique streaming platforms from your dataset
    platforms = ['Spotify', 'Apple Music', 'YouTube', 'Tidal', 'Deezer', 'Amazon Music']
    platform = st.selectbox('Streaming Platform', sorted(platforms))
    
    # Get unique genres from your dataset
    genres = ['Pop', 'Rock', 'Hip Hop', 'EDM', 'Country', 'Reggae', 'Classical', 'Jazz', 'R&B']
    genre = st.selectbox('Top Genre', sorted(genres))
    
    minutes_streamed = st.slider('Minutes Streamed Per Day', 0, 600, 120)
    
with col2:
    songs_liked = st.number_input('Number of Songs Liked', min_value=0, max_value=1000, value=200)
    
    # Get unique artists from your dataset
    artists = ['Adele', 'Ed Sheeran', 'Post Malone', 'Dua Lipa', 'The Weeknd', 'Taylor Swift', 'Drake', 'BTS']
    artist = st.selectbox('Most Played Artist', sorted(artists))
    
    subscription = st.selectbox('Subscription Type', ['Free', 'Premium'])
    
    listening_time = st.selectbox('Listening Time', ['Morning', 'Afternoon', 'Night'])
    
    discover_weekly = st.slider('Discover Weekly Engagement (%)', 0.0, 100.0, 40.0)
    
    repeat_rate = st.slider('Repeat Song Rate (%)', 0.0, 100.0, 30.0)

# Prepare the input data for prediction
def prepare_input_data():
    input_data = {
        'Age': age,
        'Country': country,
        'Streaming_Platform': platform,
        'Top_Genre': genre,
        'Minutes_Streamed_Per_Day': minutes_streamed,
        'Number_of_Songs_Liked': songs_liked,
        'Most_Played_Artist': artist,
        'Subscription_Type': subscription,
        'Listening_Time': listening_time,
        'Discover_Weekly_Engagement': discover_weekly,
        'Repeat Song Rate (%)': repeat_rate
    }
    
    # Convert to DataFrame with the same structure as training data
    input_df = pd.DataFrame([input_data])
    
    return input_df

# Create a predict button
if st.button('Predict Streaming Segment'):
    # Get the input data
    input_data = prepare_input_data()
    
    # Make prediction
    try:
        prediction = model.predict(input_data)[0]
        
        # Determine appropriate icon and color based on streaming segment
        icon = "🎵"
        if prediction == 'Light (<30m)':
            color = "lightblue"
        elif prediction == 'Casual (30-60m)':
            color = "lightgreen"
        elif prediction == 'Regular (1-2h)':
            color = "yellow"
        elif prediction == 'Heavy (2-4h)':
            color = "orange"
        else:  # Power User
            color = "red"
            icon = "🔥"
            
        # Display the prediction with styling
        st.markdown(f"""
        <div style="padding: 20px; border-radius: 10px; background-color: {color}; text-align: center;">
            <h2>{icon} Predicted Segment: {prediction} {icon}</h2>
        </div>
        """, unsafe_allow_html=True)
        
        # Add segment-specific insights
        st.subheader("What This Means:")
        
        insights = {
            'Light (<30m)': "This user is a casual listener who uses streaming services occasionally. They might benefit from personalized playlists and discovery features to increase engagement.",
            'Casual (30-60m)': "This user enjoys music regularly but in moderate amounts. They might respond well to curated content and artist recommendations.",
            'Regular (1-2h)': "This user makes streaming part of their daily routine. They likely value both familiar favorites and new discoveries.",
            'Heavy (2-4h)': "This user is deeply engaged with music streaming as a significant part of their day. They likely have specific preferences and might be receptive to premium features.",
            'Power User (>4h)': "This user is immersed in streaming content and likely uses it throughout various activities. They're ideal candidates for premium tiers and might be influencers among their peers."
        }
        
        st.write(insights.get(prediction, "This user has unique streaming habits."))
        
    except Exception as e:
        st.error(f"Prediction error: {e}")
        
# Add information about the model
with st.expander("About this Model"):
    st.write("""
    This model uses Gradient Boosting to predict a user's streaming segment based on their demographics and listening habits.
    
    The model was trained on music streaming data and categorizes users into five segments:
    - Light (<30 minutes per day)
    - Casual (30-60 minutes per day)
    - Regular (1-2 hours per day)
    - Heavy (2-4 hours per day)
    - Power User (>4 hours per day)
    
    Accuracy: The model achieves approximately X% accuracy on test data.
    """)