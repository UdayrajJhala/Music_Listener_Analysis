import { useState } from "react";

const App = () => {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {activePage === "about" && <AboutProject />}
        {activePage === "analytics" && <AnalyticsDashboard />}
        {activePage === "prediction" && <PredictionModel />}
      </div>
    </div>
  );
};

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <svg
              className="h-8 w-8 text-white mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            <h1 className="text-white font-bold text-xl">
              Global Music Listener Analysis
            </h1>
          </div>
          <div className="flex space-x-2">
            <NavLink
              title="About"
              active={activePage === "about"}
              onClick={() => setActivePage("about")}
            />
            <NavLink
              title="Analytics"
              active={activePage === "analytics"}
              onClick={() => setActivePage("analytics")}
            />
            <NavLink
              title="Prediction"
              active={activePage === "prediction"}
              onClick={() => setActivePage("prediction")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ title, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-white text-green-700 shadow-md transform scale-105"
          : "text-white hover:bg-green-500 hover:text-white"
      }`}
    >
      {title}
    </button>
  );
};

const AboutProject = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">
          Global Music Listener Analysis
        </h2>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <div className="prose max-w-none">
            <p className="mb-4 text-gray-700 leading-relaxed">
              This research proposes an end-to-end data science and business
              intelligence solution to analyze global music consumption patterns
              across different streaming platforms. Our project analyzes music
              streaming behavior across platforms using data from 5,000 users,
              combining machine learning techniques with business intelligence
              tools to extract actionable insights.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Music streaming has revolutionized how people consume music,
              generating vast amounts of user interaction data. We've performed
              preprocessing and exploratory data analysis in Python, then
              created interactive dashboards to visualize key patterns and
              insights, enabling data-driven decision-making for music
              platforms, marketers, and content strategists.
            </p>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Project Objectives
              </h3>
              <p className="text-gray-700">
                Our objective is to uncover user engagement trends, segment
                audiences based on listening behavior, and highlight
                platform-specific usage patterns to support strategic decisions
                in music marketing, content curation, and audience targeting.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-green-700 border-b-2 border-green-100 pb-2">
            Dataset Overview
          </h3>
          <p className="mb-3 text-gray-700">
            Our dataset contains 5,000 rows capturing diverse user interactions
            with music streaming services, including demographics, preferences,
            and engagement metrics:
          </p>
          <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-inner">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-3 px-4 border-b">Column Name</th>
                  <th className="py-3 px-4 border-b">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">User_ID</td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Unique identifier for each user
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Age</td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    User's age
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Country</td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    User's country
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Streaming Platform
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Music service used
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Top Genre</td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    User's most listened genre
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Minutes Streamed Per Day
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Average daily listening time
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Number of Songs Liked
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Total songs liked/saved by user
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Most Played Artist
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    User's top artist
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Subscription Type
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Free or premium account
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Listening Time
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Preferred time (Morning/Afternoon/Night)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Discover Weekly Engagement (%)
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Usage of recommendation features
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Repeat Song Rate (%)
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Percentage of repeat listens
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-green-700 border-b-2 border-green-100 pb-2">
            Visualization Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg">Understanding Users</h4>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Demographics, platform preferences, and subscription insights to
                understand your audience better.
              </p>
              <div className="text-xs text-gray-500">
                Age distribution • Platform usage • Geographic spread •
                Subscription types
              </div>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg">
                  Genre & Artist Preferences
                </h4>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Explore musical preferences across different demographics and
                regions.
              </p>
              <div className="text-xs text-gray-500">
                Top artists • Popular genres • Artist-genre correlations •
                Age-based preferences
              </div>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg">Listening Behaviors</h4>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Uncover patterns in how and when users engage with music
                content.
              </p>
              <div className="text-xs text-gray-500">
                Listening duration • Time preferences • Streaming habits •
                Engagement metrics
              </div>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg">Recommendation Insights</h4>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Analyze how users interact with personalized recommendations and
                discovery features.
              </p>
              <div className="text-xs text-gray-500">
                Discovery engagement • Repeat rates • Content exploration •
                Regional variances
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4 text-green-700 border-b-2 border-green-100 pb-2">
            Machine Learning Models
          </h3>
          <p className="mb-4 text-gray-700">
            We implemented three machine learning algorithms to derive insights
            and predictions from our dataset:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h4 className="text-center font-bold text-lg mb-2">
                K-means Clustering
              </h4>
              <p className="text-gray-600 text-sm text-center">
                Used to segment users into groups with similar listening
                behaviors and preferences.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <h4 className="text-center font-bold text-lg mb-2">
                Random Forest
              </h4>
              <p className="text-gray-600 text-sm text-center">
                Applied for classification and feature importance analysis to
                understand key factors affecting music listening patterns.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
              </div>
              <h4 className="text-center font-bold text-lg mb-2">
                Gradient Boosting
              </h4>
              <p className="text-gray-600 text-sm text-center">
                Implemented for prediction tasks with high accuracy and to
                identify complex relationships in the data.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-green-700">
            Innovation & Business Impact
          </h3>
          <p className="text-gray-700 mb-4">
            The innovation in this project lies in the seamless integration of
            machine learning techniques with business intelligence tools to
            analyze multi-platform global music streaming data. This system
            aggregates data from diverse sources to create a unified framework
            for strategic insights that directly inform content strategy, user
            targeting, and ad placement optimization.
          </p>
          <p className="text-gray-700">
            Our analytics framework enables music platforms, marketers, and
            content strategists to make informed decisions about user retention,
            content curation, monetization strategies, and campaign targeting
            through the conversion of granular streaming data into rich business
            insight.
          </p>
        </div>
      </div>
    </div>
  );
};

const AnalyticsDashboard = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
        isFullScreen ? "fixed inset-0 z-50 p-0" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center ${
          isFullScreen ? "p-4 bg-white" : "p-6 border-b"
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <svg
            className="h-6 w-6 text-green-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          Analytics Dashboard
        </h2>
        <button
          onClick={toggleFullScreen}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center transition-colors duration-200 shadow-md"
        >
          {isFullScreen ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Exit Fullscreen
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
              View Fullscreen
            </>
          )}
        </button>
      </div>
      <div
        className={`w-full overflow-hidden ${
          isFullScreen
            ? "h-screen p-0"
            : "rounded-b-lg h-96 md:h-screen max-h-screen"
        }`}
      >
        <iframe
          title="DSBI_dashboard"
          className="w-full h-full"
          src="https://app.powerbi.com/reportEmbed?reportId=81e5713c-2e63-499e-99bd-95a28ab19c46&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1"
          frameBorder="0"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

const PredictionModel = () => {
  const [formData, setFormData] = useState({
    Age: 30,
    Country: "United States",
    Streaming_Platform: "Spotify",
    Top_Genre: "Pop",
    Minutes_Streamed_Per_Day: 120,
    Number_of_Songs_Liked: 200,
    Most_Played_Artist: "Taylor Swift",
    Subscription_Type: "Premium",
    Listening_Time: "Afternoon",
    Discover_Weekly_Engagement: 50,
    "Repeat Song Rate (%)": 30,
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert numeric inputs to numbers
    const parsedValue = [
      "Age",
      "Minutes_Streamed_Per_Day",
      "Number_of_Songs_Liked",
      "Discover_Weekly_Engagement",
      "Repeat Song Rate (%)",
    ].includes(name)
      ? parseFloat(value)
      : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error making prediction");
      }

      setPrediction(data.streaming_segment);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const countries = [
    "United States",
    "Japan",
    "Germany",
    "United Kingdom",
    "Australia",
    "South Korea",
    "Canada",
    "Brazil",
    "France",
    "India",
    "Mexico",
    "Spain",
  ];
  const platforms = [
    "Spotify",
    "Apple Music",
    "YouTube",
    "Amazon Music",
    "Deezer",
    "Tidal",
    "Pandora",
    "SoundCloud",
  ];
  const genres = [
    "Pop",
    "Rock",
    "Hip Hop",
    "R&B",
    "EDM",
    "Country",
    "Jazz",
    "Classical",
    "Reggae",
    "Folk",
    "Metal",
    "Indie",
  ];
  const artists = [
    "Taylor Swift",
    "Drake",
    "Ed Sheeran",
    "Billie Eilish",
    "The Weeknd",
    "Dua Lipa",
    "Post Malone",
    "Adele",
    "Bad Bunny",
    "BTS",
    "Ariana Grande",
  ];
  const listeningTimes = ["Morning", "Afternoon", "Night"];

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">
          Streaming Segment Prediction
        </h2>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            This tool uses a machine learning model to predict a user's
            streaming segment based on their listening habits and preferences.
            Fill out the form below with user data to get a prediction.
          </p>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Streaming Segments
            </h3>
            <p className="text-gray-700">
              Our model classifies users into five segments based on their daily
              streaming activity:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>
                <span className="font-medium">Light</span>
              </li>
              <li>
                <span className="font-medium">Casual</span>
              </li>
              <li>
                <span className="font-medium">Regular</span>
              </li>
              <li>
                <span className="font-medium">Heavy</span>
              </li>
              <li>
                <span className="font-medium">Power User</span>
                hours daily
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-700 border-b-2 border-green-100 pb-2">
              Input User Data
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Age Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    name="Age"
                    value={formData.Age}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    min="13"
                    max="100"
                    required
                  />
                </div>

                {/* Country Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    required
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Streaming Platform */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Streaming Platform
                  </label>
                  <select
                    name="Streaming_Platform"
                    value={formData.Streaming_Platform}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    required
                  >
                    {platforms.map((platform) => (
                      <option key={platform} value={platform}>
                        {platform}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Top Genre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Top Genre
                  </label>
                  <select
                    name="Top_Genre"
                    value={formData.Top_Genre}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    required
                  >
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Minutes Streamed */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minutes Streamed Per Day
                  </label>
                  <input
                    type="number"
                    name="Minutes_Streamed_Per_Day"
                    value={formData.Minutes_Streamed_Per_Day}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    min="0"
                    max="1000"
                    required
                  />
                </div>

                {/* Songs Liked */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Songs Liked
                  </label>
                  <input
                    type="number"
                    name="Number_of_Songs_Liked"
                    value={formData.Number_of_Songs_Liked}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    min="0"
                    max="10000"
                    required
                  />
                </div>

                {/* Most Played Artist */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Most Played Artist
                  </label>
                  <select
                    name="Most_Played_Artist"
                    value={formData.Most_Played_Artist}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    required
                  >
                    {artists.map((artist) => (
                      <option key={artist} value={artist}>
                        {artist}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subscription Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subscription Type
                  </label>
                  <select
                    name="Subscription_Type"
                    value={formData.Subscription_Type}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    required
                  >
                    <option value="Free">Free</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>

                {/* Listening Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Listening Time
                  </label>
                  <select
                    name="Listening_Time"
                    value={formData.Listening_Time}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    required
                  >
                    {listeningTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Discover Weekly Engagement */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Discover Weekly Engagement (%)
                  </label>
                  <input
                    type="number"
                    name="Discover_Weekly_Engagement"
                    value={formData.Discover_Weekly_Engagement}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    min="0"
                    max="100"
                    step="0.01"
                    required
                  />
                </div>

                {/* Repeat Song Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Repeat Song Rate (%)
                  </label>
                  <input
                    type="number"
                    name="Repeat Song Rate (%)"
                    value={formData["Repeat Song Rate (%)"]}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    min="0"
                    max="100"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md shadow-md transition-colors duration-200 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Predict Streaming Segment"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-green-700 border-b-2 border-green-100 pb-2">
              Prediction Result
            </h3>

            {error ? (
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : prediction ? (
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Prediction Result
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Based on the input data, this user is classified as:
                  </p>

                  <div className="bg-green-600 text-white text-2xl font-bold py-3 px-8 rounded-lg inline-block shadow-md mb-6">
                    {prediction}
                  </div>

                  <div className="text-left">
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">
                        Key factors for this prediction:
                      </span>
                    </p>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>
                        Daily streaming time:{" "}
                        {formData.Minutes_Streamed_Per_Day} minutes
                      </li>
                      <li>Content preference: {formData.Top_Genre}</li>
                      <li>
                        Engagement level: {formData.Discover_Weekly_Engagement}%
                        discovery engagement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 mt-8">
                <svg
                  className="h-24 w-24 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-500 italic text-lg">
                  Enter user data and submit to see prediction results
                </p>
              </div>
            )}

            <div className="mt-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Configuration Note
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        This interface connects to the Flask API endpoint at{" "}
                        <code>/predict</code>. Make sure your API is running and
                        accessible to get predictions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
