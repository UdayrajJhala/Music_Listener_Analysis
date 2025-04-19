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
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">
                    Longest Session Length
                  </td>
                  <td className="py-3 px-4 border-b text-gray-700">
                    Length of the longest session of the user for in minutes
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
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=81e5713c-2e63-499e-99bd-95a28ab19c46&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};

const PredictionModel = () => {
   const [formData, setFormData] = useState({
     longest_session_duration: 45,
     minutes_streamed_per_day: 120,
     subscription_type: "Premium",
   });

   const [prediction, setPrediction] = useState(null);
   const [probabilities, setProbabilities] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: name === "subscription_type" ? value : parseFloat(value),
     });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
     setError(null);
     setPrediction(null);
     setProbabilities(null);

     try {
       const response = await fetch("http://127.0.0.1:5000/predict", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });

       if (!response.ok) {
         throw new Error(`Error: ${response.status}`);
       }

       const data = await response.json();
       setPrediction(data.prediction);
       if (data.class_probabilities) {
         setProbabilities(data.class_probabilities);
       }
     } catch (err) {
       setError(err.message);
     } finally {
       setLoading(false);
     }
   };

   return (
     <div className="bg-white shadow-xl rounded-lg overflow-hidden">
       <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
         <h2 className="text-2xl font-bold text-white flex items-center">
           <svg
             className="h-6 w-6 mr-2"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
             />
           </svg>
           Listening Time Prediction Model
         </h2>
       </div>

       <div className="p-6">
         <div className="mb-8">
           <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
             <h3 className="text-lg font-semibold text-green-700 mb-2">
               How It Works
             </h3>
             <p className="text-gray-700">
               Our machine learning model predicts when you're most likely to
               listen to music (Day, Afternoon, or Night) based on your
               listening habits. Fill out the form below to get your
               personalized prediction.
             </p>
           </div>

           <form onSubmit={handleSubmit} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Longest Session Duration (minutes)
                 </label>
                 <div className="mt-1 relative rounded-md shadow-sm">
                   <input
                     type="number"
                     name="longest_session_duration"
                     value={formData.longest_session_duration}
                     onChange={handleInputChange}
                     className="focus:ring-green-500 focus:border-green-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                     min="1"
                     step="1"
                     required
                   />
                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                     <span className="text-gray-500 sm:text-sm">min</span>
                   </div>
                 </div>
                 <p className="mt-1 text-xs text-gray-500">
                   The length of your longest continuous music session
                 </p>
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Minutes Streamed Per Day
                 </label>
                 <div className="mt-1 relative rounded-md shadow-sm">
                   <input
                     type="number"
                     name="minutes_streamed_per_day"
                     value={formData.minutes_streamed_per_day}
                     onChange={handleInputChange}
                     className="focus:ring-green-500 focus:border-green-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                     min="1"
                     step="1"
                     required
                   />
                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                     <span className="text-gray-500 sm:text-sm">min</span>
                   </div>
                 </div>
                 <p className="mt-1 text-xs text-gray-500">
                   Average number of minutes you stream music daily
                 </p>
               </div>
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Subscription Type
               </label>
               <select
                 name="subscription_type"
                 value={formData.subscription_type}
                 onChange={handleInputChange}
                 className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
               >
                 <option value="Premium">Premium</option>
                 <option value="Free">Free</option>
               </select>
               <p className="mt-1 text-xs text-gray-500">
                 Your subscription type on music streaming platforms
               </p>
             </div>

             <div className="flex items-center justify-center">
               <button
                 type="submit"
                 disabled={loading}
                 className={`px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white 
                  ${
                    loading ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
                  } 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200`}
               >
                 {loading ? (
                   <span className="flex items-center">
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
                   </span>
                 ) : (
                   "Predict Listening Time"
                 )}
               </button>
             </div>
           </form>
         </div>

         {error && (
           <div className="bg-red-50 p-4 rounded-md mb-6">
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
                 <h3 className="text-sm font-medium text-red-800">
                   Error making prediction
                 </h3>
                 <p className="text-sm text-red-700 mt-1">{error}</p>
                 <p className="text-sm text-red-700 mt-1">
                   Please check if the API server is running.
                 </p>
               </div>
             </div>
           </div>
         )}

         {prediction && (
           <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-inner">
             <h3 className="text-xl font-bold text-green-800 mb-4">
               Prediction Result
             </h3>

             <div className="bg-white p-4 rounded-md shadow-sm mb-4">
               <p className="text-sm font-medium text-gray-500">
                 Based on your inputs, you're most likely to listen to music
                 during:
               </p>
               <p className="text-3xl font-bold text-green-700 mt-2">
                 {prediction}
               </p>
             </div>

             {probabilities && (
               <div>
                 <h4 className="text-md font-semibold text-green-700 mb-2">
                   Probability Breakdown
                 </h4>
                 <div className="space-y-3">
                   {Object.entries(probabilities).map(([time, probability]) => (
                     <div key={time} className="flex items-center">
                       <span className="w-20 text-sm font-medium text-gray-700">
                         {time}:
                       </span>
                       <div className="w-full bg-gray-200 rounded-full h-3 ml-2">
                         <div
                           className="bg-green-600 h-3 rounded-full"
                           style={{ width: `${probability * 100}%` }}
                         ></div>
                       </div>
                       <span className="ml-2 text-sm font-medium text-gray-700">
                         {(probability * 100).toFixed(1)}%
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
             )}
           </div>
         )}
       </div>
     </div>
   );
};

export default App;
