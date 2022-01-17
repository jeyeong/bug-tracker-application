import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

import './PriorityCountsChart.css';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PriorityCountsChart = ({ data }) => {
  const counts = [
    data['Critical'],
    data['Medium'],
    data['Low']
  ]

  const tableData = {
    labels: ['Critical', 'Medium', 'Low'],
    datasets: [
      {
        label: '# of Tickets',
        data: counts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Priority Counts',
      },
    }
  }

  return (
    <div>
      <Pie data={tableData} options={options} />
    </div>
  );
}

export default PriorityCountsChart;
