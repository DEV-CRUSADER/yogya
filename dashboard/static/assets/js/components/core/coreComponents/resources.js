import React, { useState, useEffect, useRef } from "react";

import { Container, Header, Content } from 'rsuite';

import { TabTitle } from "../scripts/general_function";
import { Charts } from "./charts/charts";
import { ResourcesSidebar, TopBar } from "./sidebar/sidebar";

import "../../../../../css/core/sidebar.css";

// CURERNT_DATE
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;


export function Resources() {
    TabTitle('YC | Equity Charts')
    const [chartData, setChartData] = useState({})
    const [labels, setLabels] = useState([])
    const [dataFound, setDataFound] = useState(false)
    const [noData, setNoData] = useState(false)
    const [indexName, setIndexName] = useState("Nifty 50")
    const [formData, setFormData] = useState({
        symbol: 'Nifty 50',
        start_date: '1990-01-01',
        end_date: formattedDate,
    })

    const [expand, setExpand] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", windowSizeHandler)

        return () => {
            window.removeEventListener("resize", windowSizeHandler)
        }
    }, [])

    return (
        <>
            <div className="sidebar-page">
                <Container>
                    {(windowWidth >= 800) ?
                    <ResourcesSidebar
                        expand={expand}
                        setExpand={setExpand}
                        setDataFound={setDataFound}
                        setIndexName={setIndexName}
                        setLabels={setLabels}
                        setChartData={setChartData}
                        setNoData={setNoData}
                    /> : null}
                    <Container
                        style={{
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                        }}
                    >
                        <Header>
                            <h2
                                className="px-4 mx-3 mt-3 pt-3 display-6 fw-bold"
                            >{indexName}</h2>
                        </Header>
                        <hr
                            className="border-3 border-dark opacity-25"
                        />
                        <Content>
                            <Charts
                                noData={noData}
                                setNoData={setNoData}
                                formData={formData}
                                chartData={chartData}
                                setChartData={setChartData}
                                labels={labels}
                                setLabels={setLabels}
                                dataFound={dataFound}
                                setDataFound={setDataFound}
                                indexName={indexName}
                                setIndexName={setIndexName}
                            />
                        </Content>
                    </Container>
                </Container>
            </div>
        </>
    );
}