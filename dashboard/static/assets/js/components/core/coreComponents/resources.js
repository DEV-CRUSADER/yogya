import React , { useState }from "react";
import { TabTitle } from "../scripts/general_function";
import { Charts } from "./charts/charts";

export function Resources() {
    TabTitle('YC| Equity Charts')
    const [chartData, setChartData] = useState({})
    const [labels, setLabels] = useState([])
    const [dataFound, setDataFound] = useState(false)
    const [indexName, setIndexName] = useState("Nifty 50")

    return (
        <>
            <Charts 
            chartData={chartData}
            setChartData={setChartData}
            labels={labels}
            setLabels={setLabels}
            dataFound={dataFound}
            setDataFound={setDataFound}
            indexName={indexName}
            setIndexName={setIndexName}
            />
        </>
    );
}