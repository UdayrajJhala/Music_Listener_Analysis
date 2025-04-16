import { useState } from "react";

const App = () => {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activePage === "about" && <AboutProject />}
        {activePage === "analytics" && <AnalyticsDashboard />}
        {activePage === "prediction" && <PredictionModel />}
      </div>
    </div>
  );
};

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-xl">
              Global Music Listener Analysis
            </h1>
          </div>
          <div className="flex space-x-4">
            <NavLink
              title="About the Project"
              active={activePage === "about"}
              onClick={() => setActivePage("about")}
            />
            <NavLink
              title="Analytics Dashboard"
              active={activePage === "analytics"}
              onClick={() => setActivePage("analytics")}
            />
            <NavLink
              title="Prediction Model"
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
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        active
          ? "bg-green-500 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      {title}
    </button>
  );
};

const AboutProject = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500">
        About the Global Music Listener Analysis
      </h2>

      <div className="mb-8">
        <p className="mb-4">
          This project analyzes music streaming behavior across different
          platforms using data from 5,000 users. We performed preprocessing and
          exploratory data analysis in Python, then created interactive
          dashboards to visualize key patterns and insights.
        </p>

        <h3 className="text-xl font-bold mb-3">Dataset Overview</h3>
        <p className="mb-2">
          Our dataset contains 5,000 rows with the following columns:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Column Name</th>
                <th className="py-2 px-4 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">User_ID</td>
                <td className="py-2 px-4 border">
                  Unique identifier for each user
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Age</td>
                <td className="py-2 px-4 border">User's age</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Country</td>
                <td className="py-2 px-4 border">User's country</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Streaming Platform</td>
                <td className="py-2 px-4 border">Music service used</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Top Genre</td>
                <td className="py-2 px-4 border">User's most listened genre</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Minutes Streamed Per Day</td>
                <td className="py-2 px-4 border">
                  Average daily listening time
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Number of Songs Liked</td>
                <td className="py-2 px-4 border">
                  Total songs liked/saved by user
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Most Played Artist</td>
                <td className="py-2 px-4 border">User's top artist</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Subscription Type</td>
                <td className="py-2 px-4 border">Free or premium account</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Listening Time</td>
                <td className="py-2 px-4 border">
                  Preferred time (Morning/Afternoon/Night)
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">
                  Discover Weekly Engagement (%)
                </td>
                <td className="py-2 px-4 border">
                  Usage of recommendation features
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Repeat Song Rate (%)</td>
                <td className="py-2 px-4 border">
                  Percentage of repeat listens
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">Visualizations Overview</h3>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">
            Page 1: Understanding Users
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Age Distribution</h5>
              <p className="text-sm text-gray-600">
                Understand the dominant user age groups. Helps tailor platform
                UX and content to target demographics.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Number of Users by Streaming Platform
              </h5>
              <p className="text-sm text-gray-600">
                See which platforms are most popular among users — useful for
                comparative insights.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Total Minutes Listened by Age Group & Time of Day
              </h5>
              <p className="text-sm text-gray-600">
                Analyze listening habits across age groups and their active
                hours — helps with content timing/personalization.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Country Map</h5>
              <p className="text-sm text-gray-600">
                Visualize geographic spread of users. Identify top countries by
                user count.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Premium vs Free Users</h5>
              <p className="text-sm text-gray-600">
                Understand user monetization — how many are paying vs using free
                services.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">
            Page 2: Genre and Artist Preferences
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Top Artists by Listener Count</h5>
              <p className="text-sm text-gray-600">
                Identify the most listened-to artists — informs trends,
                marketing, and playlists.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Top Genres by Listener Count</h5>
              <p className="text-sm text-gray-600">
                Understand musical preferences — helps with curation and
                recommendation engines.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Artist vs Genre Heatmap</h5>
              <p className="text-sm text-gray-600">
                Explore relationships between top genres and most-played artists
                — gives insight into crossover appeal.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Genre Preferences by Age group</h5>
              <p className="text-sm text-gray-600">
                See how genre preferences vary with age.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">
            Page 3: Listening Behavior & User Habits
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Avg Listening Duration by Time of Day
              </h5>
              <p className="text-sm text-gray-600">
                Shows when users are most engaged — morning, afternoon, or night
                — helping understand listening peaks during the day.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Avg Discover Weekly Engagement % vs Age
              </h5>
              <p className="text-sm text-gray-600">
                Examines whether younger or older users interact more with
                algorithmic recommendations.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Distribution of Minutes Streamed Per Day
              </h5>
              <p className="text-sm text-gray-600">
                Reveals overall activity levels — shows common listening
                durations and identifies heavy or light users.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Number of Songs Liked by Age Group</h5>
              <p className="text-sm text-gray-600">
                Measures interaction and personal curation behavior across age
                brackets.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">
            Page 4: Engagement and Recommendation Insights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Repeat Song Rate vs Age</h5>
              <p className="text-sm text-gray-600">
                Analyze how repeat behavior changes with age — shows
                habit/loyalty trends.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">Discover Weekly Engagement %</h5>
              <p className="text-sm text-gray-600">
                Show how much users engage with recommendations — identifies
                extremes and typical user behavior.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Top Countries with Highest Avg Repeat Rate
              </h5>
              <p className="text-sm text-gray-600">
                Reveal regions with most loyal listening behavior — useful for
                market focus or cultural insights.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Discover Weekly Engagement by Platform
              </h5>
              <p className="text-sm text-gray-600">
                See which platform drives the most engagement with personalized
                playlists.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <h5 className="font-bold">
                Avg minutes streamed per day vs no of songs liked
              </h5>
              <p className="text-sm text-gray-600">
                Identify whether more minutes streamed = more likes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">Machine Learning Models</h3>
        <p className="mb-3">
          We implemented three machine learning algorithms to derive insights
          from our dataset:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2">
            <span className="font-semibold">K-means Clustering:</span> Used to
            segment users into groups with similar listening behaviors and
            preferences.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Random Forest:</span> Applied for
            classification and feature importance analysis to understand key
            factors affecting music listening patterns.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Gradient Boosting:</span>{" "}
            Implemented for prediction tasks with high accuracy and to identify
            complex relationships in the data.
          </li>
        </ul>
      </div>
    </div>
  );
};

const AnalyticsDashboard = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Analytics Dashboard
      </h2>
      <div className="w-full h-96 md:h-screen max-h-screen overflow-hidden rounded">
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
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Prediction Model
      </h2>
      <p className="text-gray-500 italic">
        This page is currently under development.
      </p>
    </div>
  );
};

export default App;
