import React, { useState, useEffect } from 'react'
import { MakeChart } from './chart';
import loader from '../../../../../img/loader.gif';
import { Footer } from '../footer';
import { TopBar } from '../sidebar/sidebar';


// APICaller
import { APICaller } from '../../scripts/server';


let contentHeigth = "80.2svh"

if (window.innerWidth <= 630){
  contentHeigth = "81svh"
} else if (window.innerWidth > 630 && window.innerWidth <= 1024){
  contentHeigth = "86svh"
} else {
  contentHeigth = "80.2svh"
}

export const MakeChartsType = [
  {
    name: "PE GRAPH",
    data: "pe",
    chartType: "PE"
  },
  {
    name: "PB GRAPH",
    data: "pb",
    chartType: "PB"
  },
  {
    name: "Divident Yield GRAPH",
    data: "divYield",
    chartType: "Divident yield"
  },
] 


export function Charts({
  chartData,
  setChartData,
  labels,
  setLabels,
  dataFound,
  setDataFound,
  indexName,
  setIndexName
}) 
{
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await APICaller.FetchDefaultIndexData();

        if (!res.ok) {
          if (res.data.status) {
            setChartData(res.data.data);
            setLabels(res.data.data.date);
            setDataFound(true);
          } else {
            console.log('Failed to fetch data from NSE');
          }
        } else {
          console.log('Failed');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      fetchData();
    };
  }, []);


  // TO set size of the Charts
  const [graphSize, setGraphSize] = useState(650);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth <= 630){
        setGraphSize(300)
      } else if (window.innerWidth > 630 && window.innerWidth <= 1024){
        setGraphSize(500)
      } else if (window.innerWidth > 1024){
        setGraphSize(650)
      }
    }
    window.addEventListener("resize", windowSizeHandler)
    
    return () => {
      window.removeEventListener("resize", windowSizeHandler)
    }
  },[])


  return (
    <>
      <div className='container-fluid m-0 p-0'
        style={{
          overflow: "scroll",
          overflowX: "hidden",
          height: `${contentHeigth}`,
          marginLeft: "240px"
        }}
      >
        {(windowWidth < 800) && (
            <TopBar
              setDataFound={setDataFound}
              setIndexName={setIndexName}
              setLabels={setLabels}
              setChartData={setChartData}
            />      
        )}
        {!dataFound && (
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
        )}
        {dataFound && (
          MakeChartsType.map((item, index) => (
            <RenderChart
              indexName={indexName}
              name={item.name}
              labels={labels}
              data={chartData[item.data]}
              chartType={item.chartType}
              graphSize={graphSize}
              key={index}
            />
          ))
        )}
        <Footer />
      </div>
    </>
  );
}

export function RenderChart({ indexName, name, labels, data, chartType, graphSize }){
  return (
    <div className='p-3 mx-0 m-md-1 m-lg-2 m-xl-2 m-xxl-2 mt-4 mb-4 p-2' style={{
      border: "3px solid var(--secondary-color)"
    }}>
      <div className='d-flex justify-content-center m-2'>
        <h3 style={{
          fontSize: "1rem"
        }}>{indexName}&nbsp;{name}</h3>
      </div>
      <MakeChart 
        labels={labels}
        data={data}
        chartType={chartType}
        graphSize={graphSize}
      />
    </div>
  )
}