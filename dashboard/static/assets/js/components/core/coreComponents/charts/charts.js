import React, { useState, useEffect } from 'react'
import { MakeChart } from './chart';
import loader from '../../../../../img/loader.gif';
import { Footer } from '../footer';


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
    {/* main div */}
      <div className='container-fluid m-0 p-0'
        style={{
          overflow: "scroll",
          overflowX: "hidden",
          height: "80svh",
          marginLeft: "240px"
        }}
      >
        {dataFound ? (
          <>
            <div className='p-4 m-5 ' style={{
              border: "3px solid var(--secondary-color)",
            }}>
              <div className='d-flex justify-content-center m-2'>
                <h3 style={{
                fontSize: "1rem"
              }}>{indexName} PE Graph</h3>
              </div>
              <MakeChart labels={labels} data={chartData.pe} chartType="PE" />
            </div>
            <div className=' p-4 m-5 ' style={{
              border: "3px solid var(--secondary-color)"
            }}>
              <div className='d-flex justify-content-center m-2'>
                <h3 style={{
                fontSize: "1rem"
              }}>{indexName} PB Graph</h3>
              </div>
              <MakeChart labels={labels} data={chartData.pb} chartType="PB" />
            </div>
            <div className=' p-4 m-5 ' style={{
              border: "3px solid var(--secondary-color)"
            }}>
              <div className='d-flex justify-content-center m-2'>
                <h3 style={{
                fontSize: "1rem"
              }}>{indexName} DivYield Graph</h3>
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
        <Footer />
      </div>
    </>
  );
}