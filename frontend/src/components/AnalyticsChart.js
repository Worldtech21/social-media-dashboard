import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = ({ data }) => {
  // Prepare chart data
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Likes',
        data: data.likes,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Engagement',
        data: data.engagement,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Social Media Engagement Metrics' },
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default AnalyticsChart;
