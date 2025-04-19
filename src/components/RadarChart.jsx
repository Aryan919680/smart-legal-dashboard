import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const RadarCharts = () => {
  // Chart 1: Internal Team Performance
  const teamData = {
    labels: [
      'Testimony Quality',
      'Entity Linking',
      'Medical Data Review',
      'Trial Preparation',
      'Deposition Readiness',
      'Intake Analysis'
    ],
    datasets: [
      {
        label: 'John Doe',
        data: [85, 70, 90, 75, 80, 95],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
      {
        label: 'Attorney Carl',
        data: [80, 60, 88, 82, 77, 85],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Chart 2: Opposition Analysis
  const oppositionData = {
    labels: [
      'Deposition Strength',
      'Evidence Submitted',
      'Medical Documentation',
      'Legal Representation',
      'Witness Reliability',
      'Consistency',
      'Trial Preparedness',
    ],
    datasets: [
      {
        label: 'John Doe (Plaintiff)',
        data: [80, 75, 85, 70, 78, 82, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'Jane Roe (Defendant)',
        data: [75, 70, 80, 88, 82, 79, 85],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = (titleText) => ({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: titleText,
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333',
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        angleLines: {
          display: true,
        },
        grid: {
          color: '#e5e7eb',
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
      },
    },
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-2 flex flex-col gap-12">
    
      <div className="flex flex-wrap justify-center gap-6">
        {/* Chart 1 - Left */}
        <div className="bg-white p-6 rounded-2xl shadow-md" style={{ width: '500px', height: '500px' }}>
          <Radar data={teamData} options={options('Plaintiff Legal Team Assessment')} />
        </div>

        {/* Chart 2 - Right */}
        <div className="bg-white p-6 rounded-2xl shadow-md" style={{ width: '500px', height: '500px' }}>
          <Radar data={oppositionData} options={options('Case Strength: Plaintiff vs Defendant')} />
        </div>
      </div>

      {/* External Link */}
      <div className="text-center">
        <a
          href="https://legal-nexus-insight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Go to Legal Nexus Insight
        </a>
      </div>
    </div>
  );
};

export default RadarCharts;
