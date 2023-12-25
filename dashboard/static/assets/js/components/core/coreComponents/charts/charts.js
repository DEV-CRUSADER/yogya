import React, { useState, useEffect } from 'react'
import { MakeChart } from './chart';
import loader from '../../../../../img/loader.gif';

// APICaller
import { APICaller } from '../../scripts/server';


export function Charts({
  chartData,
  setChartData,
  labels,
  setLabels,
  dataFound,
  setDataFound,
  indexName,
}) {

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
      <div className='container-fluid p-2'>
        {dataFound ? (
          <>
            <h1 className='text-center'>{indexName}</h1>
            <div className='p-4 m-5 ' style={{
              border: "3px solid var(--secondary-color)"
            }}>
              <div className='d-flex justify-content-center m-2'>
                <h3>{indexName} PE Graph</h3>
              </div>
              <MakeChart labels={labels} data={chartData.pe} chartType="PE" />
            </div>
            <div className=' p-4 m-5 ' style={{
              border: "3px solid var(--secondary-color)"
            }}>
              <div className='d-flex justify-content-center m-2'>
                <h3>{indexName} PB Graph</h3>
              </div>
              <MakeChart labels={labels} data={chartData.pb} chartType="PB" />
            </div>
            <div className=' p-4 m-5 ' style={{
              border: "3px solid var(--secondary-color)"
            }}>
              <div className='d-flex justify-content-center m-2'>
                <h3>{indexName} DivYield Graph</h3>
              </div>
              <MakeChart labels={labels} data={chartData.divYield} chartType="divYield" />
            </div>
          </>
        ) : (
          <div className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <img
              src={loader} alt='Loading....'
              className='p-3'
              style={{
                width: "130px",
                height: "130px",
              }}
            />
          </div>
        )
        }
      </div>
    </>
  );
}