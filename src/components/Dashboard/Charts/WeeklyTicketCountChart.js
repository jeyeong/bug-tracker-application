import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
  ISO8601WeekToDate,
  dateToISO8601Week,
} from '../../../utils/data/dateConversionTools';

import './WeeklyTicketCountChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateWeekNumbers = () => {
  const curDate = new Date();
  const res = [];
  for (let i = 5; i >= 0; i--) {
    let d = new Date(
      curDate.getUTCFullYear(),
      curDate.getUTCMonth(),
      curDate.getUTCDate() - curDate.getUTCDay() - (i * 7) + 1,
    );
    res.push([dateToISO8601Week(d), d.getUTCFullYear()]);
  }
  return res;
}

const generateDateLabels = (weekNumbers) => {
  const dateStrings = weekNumbers.map(w => (
    ISO8601WeekToDate(w[0], w[1]).toDateString()
  ));
  const res = dateStrings.map(dateStr => {
    let splitDateStr = dateStr.split(' ');
    return splitDateStr.slice(1, 3).join(' ');
  })
  return res;
}

const generateWeekCounts = (weekNumbers, data) => {
  const res = new Array(weekNumbers.length).fill(0);
  for (let row of data) {
    let i = weekNumbers.indexOf(row.week);
    res[i] = parseInt(row.count);
  }
  return res;
}

const WeeklyTicketCountChart = ({ data }) => {
  const w = generateWeekNumbers();
  const dateLabels = generateDateLabels(w);
  const weekCounts = generateWeekCounts(w.map(w => w[0]), data);

  const tableData = {
    labels: dateLabels,
    datasets: [
      {
        label: '# of Tickets',
        data: weekCounts,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Weekly Ticket Count (Week of ...)',
      },
    },
  };

  return (
    <div>
      <Bar options={options} data={tableData} />
    </div>
  );
}

export default WeeklyTicketCountChart;
