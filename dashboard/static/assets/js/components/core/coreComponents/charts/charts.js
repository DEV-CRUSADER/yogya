import React, { useState, useEffect } from 'react';
import { Modal, Button, IconButton , ButtonToolbar, Placeholder } from 'rsuite';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import 'rsuite/dist/rsuite.min.css';

import { MakeChart } from './chart';
import loader from '../../../../../img/loader.gif';
import { Footer } from '../footer';
import { TopBar } from '../sidebar/sidebar';

// APICaller
import { APICaller } from '../../scripts/server';
import NoDataFound from "../../../../../img/no-data-found.gif"


let contentHeigth = "80.2svh"

if (window.innerWidth <= 630) {
  contentHeigth = "80.3svh"
} else if (window.innerWidth > 630 && window.innerWidth <= 1024) {
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
  noData,
  setNoData,
  chartData,
  setChartData,
  labels,
  setLabels,
  dataFound,
  setDataFound,
  indexName,
  setIndexName
}) {
  // TO set size of the Charts
  const [graphSize, setGraphSize] = useState(() => {
    if (window.innerWidth <= 630) {
      return (window.innerWidth * 0.6)
    } else if (window.innerWidth > 630 && window.innerWidth <= 1024) {
      return (window.innerWidth * 0.6)
    } else if (window.innerWidth > 1024) {
      return (window.innerWidth * 0.35)
    }
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  function fetchData(data) {
    APICaller.FetchFreeData()
      .then((res) => {
        if (!res.ok) {
          if (res.status) {
            setChartData(res.data);
            setLabels(res.data.date);
            setDataFound(true);
            setNoData(false);
          } else {
            console.log('Failed to fetch data from NSE');
          }
        } else {
          console.log('Failed');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    fetchData();
    setWindowWidth(window.innerWidth)
    const windowSizeHandler = () => {
      if (window.innerWidth <= 630) {
        setGraphSize(windowWidth * 0.6)
      } else if (window.innerWidth > 630 && window.innerWidth <= 1024) {
        setGraphSize(windowWidth * 0.6)
      } else if (window.innerWidth > 1024) {
        setGraphSize(windowWidth * 0.35)
      }
    }
    windowSizeHandler()
  }, []);


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
            setNoData={setNoData}
          />
        )}
        {(!dataFound) ? (
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
        ) : (noData) ? (
          <div className='container d-flex justify-content-center align-items-center h-75'>
            <img src={NoDataFound} alt='No Data Found' />
          </div>
        ) : (
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
        )
        }
        <div
          className="position-absolute translate-middle"
          style={{
            right: "-40px",
            bottom: "0px",
          }}
        >
          <HowToReadChart />
        </div>
        <Footer />
      </div>
    </>
  );
}

export function RenderChart({ indexName, name, labels, data, chartType, graphSize }) {
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

export function HowToReadChart() {
  const [open, setOpen] = React.useState(false);
  const [overflow, setOverflow] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const instructions = "Loading....."

  return (
    <>
      <ButtonToolbar>
        <IconButton 
          onClick={handleOpen} 
          appearance="primary"
          color="green" 
          icon={<HelpOutlineIcon />
        }>How to read charts</IconButton>
      </ButtonToolbar>

      <Modal overflow={overflow} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Information | How to react charts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {instructions}
          <Placeholder.Paragraph rows={80} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};