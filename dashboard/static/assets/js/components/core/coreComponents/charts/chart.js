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
      label: 'Avg',
      data: data.SD,
      pointRadius: 0,
      backgroundColor: [
        '#0f99ef'
      ],
      borderColor: [
        '#0f99ef'
      ],
      borderWidth: 1
    },
    {
      label: 'SD-1',
      data: data.SDM1,
      pointRadius: 0,
      backgroundColor: [
        '#ff0426'
      ],
      borderColor: [
        '#ff0000'
      ],
      borderDash: [10, 5],
      borderWidth: 1
    },
    {
      label: 'SD-2',
      data: data.SDM2,
      pointRadius: 0,
      backgroundColor: [
        '#ff0426'
      ],
      borderColor: [
        '#ff0000'
      ],
      borderDash: [10, 5],
      borderWidth: 1
    },
    {
      label: 'SD+1',
      data: data.SDP1,
      pointRadius: 0,
      backgroundColor: [
        '#ff0426'
      ],
      borderColor: [
        '#ff0000'
      ],
      borderDash: [10, 5],
      borderWidth: 1
    },
    {
      label: 'SD+2',
      data: data.SDP2,
      pointRadius: 0,
      backgroundColor: [
        '#ff0426'
      ],
      borderColor: [
        '#ff0000'
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
      x: { grid: { drawOnChartArea: false } },
      y: { grid: { drawOnChartArea: false } },
    },
<<<<<<< HEAD:dashboard/static/assets/js/components/core/coreComponents/chart.js
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 25,
          usePointStyle: true,
          pointStyle: 'circle'
        },
=======
    legend: {
      labels: {
        fontSize: 24,
>>>>>>> 67a6c4658c7f257a6b74ecac390c24d3a8483e6b:dashboard/static/assets/js/components/core/coreComponents/charts/chart.js
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