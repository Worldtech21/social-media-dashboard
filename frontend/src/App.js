import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnalyticsChart from './components/AnalyticsChart';

function App() {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    // Fetch analytics data from the Flask backend
    axios.get('http://localhost:5000/api/analytics')
      .then(response => setAnalyticsData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Social Media Analytics Dashboard</h1>
      {analyticsData ? (
        <AnalyticsChart data={analyticsData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
