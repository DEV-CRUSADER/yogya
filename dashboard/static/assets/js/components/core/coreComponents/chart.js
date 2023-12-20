// Chart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import APICaller from "../scripts/server"; // Import the fetchData function

const Showchart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const responseData = async () => {
      try {
        const APICaller = await fetchData("../scripts/server"); // Call the fetchData function
        console.log();

        const updatedChartData = {
          labels: APICaller.date,
          datasets: [
            {
              label: 'SDM2',
              data: APICaller.pb.SDM2,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            // Repeat for other datasets...
          ],
        };

        setChartData(updatedChartData);
      } catch (error) {
        console.error(error);
      }
    };

    responseData();
  }, []);

  const options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} height={400} options={options} />
    </div>
  );
};

export default Showchart;
