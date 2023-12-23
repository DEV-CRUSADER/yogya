import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export function MakeChart({ labels, data, chartType }) {
  var data = {
    labels: labels,
    datasets: [{
      label: chartType,
      data: data.standard,
      pointRadius: 0,
      backgroundColor: [
        'rgba(0,0,0,1)'
      ],
      borderColor: [
        '#7E00BD'
      ],
      borderWidth: 1
    },
    {
      label: 'SD',
      data: data.SD,
      pointRadius: 0,
      backgroundColor: [
        'rgba(0, 0, 255, 0.2)'
      ],
      borderColor: [
        'rgba(0, 0, 255, 0.2)'
      ],
      borderWidth: 1
    },
    {
      label: 'SD-1',
      data: data.SDM1,
      pointRadius: 0,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderDash: [10, 5],
      borderWidth: 1
    },
    {
      label: 'SD-2',
      data: data.SDM2,
      pointRadius: 0,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderDash: [10, 5],
      borderWidth: 1
    },
    {
      label: 'SD+1',
      data: data.SDP1,
      pointRadius: 0,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderDash: [10, 5],
      borderWidth: 1
    },
    {
      label: 'SD+2',
      data: data.SDP2,
      pointRadius: 0,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderDash: [10, 5],
      borderWidth: 1
    }
    ],
    radius: 0,
  };

  var options = {
    maintainAspectRatio: false,
    x: {
      ticks: {
        maxTicksLimit: 24
      }
    },
    scales: {
      x:{grid: {drawOnChartArea: false}},
      y:{grid: {drawOnChartArea: false}},
    },
    legend: {
      labels: {
        fontSize: 24,
      },
    },
  }

  return (
    <div>
      <Line
        data={data}
        height={1000}
        options={options}

      />
    </div>
  )

}
