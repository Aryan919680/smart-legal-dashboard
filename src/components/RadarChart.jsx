import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(RadialLinearScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Testimony', 'Medical', 'Intake', 'Entity Relations', 'Trial', 'Disposition'],
    datasets: [
      {
        label: 'John Doe',
        data: [80, 90, 70, 85, 60, 95],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Blue (lighter)
        borderColor: 'rgba(54, 162, 235, 1)', // Blue (darker)
        borderWidth: 2,
      },
      {
        label: 'Jane Roe',
        data: [70, 85, 60, 80, 50, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Green (lighter)
        borderColor: 'rgba(75, 192, 192, 1)', // Green (darker)
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 12,
        },
      },
      title: {
        display: true,
        // text: 'Case Document Strength Comparison',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333',
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          color: '#f2f2f2',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-6">
   
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Radar data={data} />
     
    </div>
     <a
        href="https://legal-nexus-insight.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Legal Nexus Insight
      </a>
    </div>
  );
};

export default RadarChart;
