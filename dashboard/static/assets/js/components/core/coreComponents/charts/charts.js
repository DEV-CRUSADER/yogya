import React, { useState, useEffect } from 'react'
import { MakeChart } from './chart';
import './loader.css';

// APICaller
import { APICaller } from '../../scripts/server';


export function Charts() {
  const [chartData, setChartData] = useState({})
  const [labels, setLabels] = useState([])
  const [dataFound, setDataFound] = useState(false)

  useEffect(() => {
    APICaller.FetchDefaultIndexData().then((res) => {
      if (!res.ok) {
        if (res.data.status) {
          setChartData(res.data.data);
          setLabels(res.data.data.date)
          setDataFound(true)
        } else {
          console.log('Failed to fetch data from NSE')
        }
      } else {
        console.log("Failed")
      }
    });
  }, []);

  return (
    <>
<<<<<<< HEAD:dashboard/static/assets/js/components/core/coreComponents/charts.js
      <div className='container-fluid p-2'>

      <div className="loader">
=======
      <div className='container-fluid'>
>>>>>>> 67a6c4658c7f257a6b74ecac390c24d3a8483e6b:dashboard/static/assets/js/components/core/coreComponents/charts/charts.js
        {dataFound && (
          <>
            <MakeChart labels={labels} data={chartData.pe} chartType="PE" />
            <MakeChart labels={labels} data={chartData.pb} chartType="PB" />
            <MakeChart labels={labels} data={chartData.divYield} chartType="divYield" />
          </>
        )}
        </div>
      </div>
    </>
  );
}