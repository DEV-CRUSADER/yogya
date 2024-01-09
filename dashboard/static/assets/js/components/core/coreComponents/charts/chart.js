import React, { useState, useEffect } from 'react';
// import * as Zoom from "chartjs-plugin-zoom";

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


export function MakeChart({ labels, data, chartType, graphSize }) {
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
        'red'
      ],
      borderColor: [
        'red'
      ],
      borderWidth: 2
    },
    {
      label: 'SD-1',
      data: data.SDM1,
      pointRadius: 0,
      backgroundColor: [
        '#3a1772'
      ],
      borderColor: [
        '#3a1772'
      ],
      borderDash: [10, 5],
      borderWidth: 2
    },
    {
      label: 'SD-2',
      data: data.SDM2,
      pointRadius: 0,
      backgroundColor: [
        '#907AD6'
      ],
      borderColor: [
        '#907AD6'
      ],
      borderDash: [10, 5],
      borderWidth: 2
    },
    {
      label: 'SD+1',
      data: data.SDP1,
      pointRadius: 0,
      backgroundColor: [
        '#DE0D92'
      ],
      borderColor: [
        '#DE0D92'
      ],
      borderDash: [10, 5],
      borderWidth: 2
    },
    {
      label: 'SD+2',
      data: data.SDP2,
      pointRadius: 0,
      backgroundColor: [
        '#493B2A'
      ],
      borderColor: [
        '#493B2A'
      ],
      borderDash: [10, 5],
      borderWidth: 2
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
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 25,
          usePointStyle: true,
          pointStyle: 'circle'
        },
      },
    },
  }

  return (
    <div>
      <Line
        data={data}
        height={graphSize}
        options={options}
      />
    </div>
  )

}
