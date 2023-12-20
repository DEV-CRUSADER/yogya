import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS, CategoryScale,  LinearScale,PointElement, LineElement,Title,  Tooltip, Legend,} from 'chart.js';

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


const Charts = () => {
  const [chart, setChart] = useState({})
  var baseUrl = "";
  var proxyUrl = "";
  var apiKey = "";



  useEffect(() => {
    const responseData = async () => {
      await fetch( "../scripts/server",{
        method: 'GET',
        response: {                   
            data:{status: true, data: {symbol: "NIFTY 50"}}
        }
      }).then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              // setChart(json.data)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    responseData()
  }, [])

}

export default Charts;