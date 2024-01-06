import React, { useState, useEffect } from "react";
import { data } from "./constants";
import { APICaller } from "../../scripts/server";

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

export function CustomSelect({ options, name, onChange }) {
    return (
        <select className="form-control" name={name} onChange={onChange}>
            {options.map((item, index) => (
                <option key={index} value={item.symbol}>
                    {item.name}
                </option>
            ))}
        </select>
    )
}
export function renderOptions(items) {
    return (
        <select className="form-control" name="symbol" onChange={handleChangeValue}>
            {items.map((item, index) => (
                <option key={index} value={item.symbol}>{item.name}</option>
            ))}
        </select>
    )
}
export function renderSelect(items) {
    return (
        <div>
            <h3>Select Index</h3>
            (renderOptions(items))
        </div>
    )
};
export function renderEmptySelection() {
    return (
        <select className="form-control p-4" name="symbol">
            <option value="Select" className="form-control disabled">--Select--</option>
        </select>
    )
};

export function ChartsIndexFrom({
    setChartData,
    setLabels,
    setDataFound,
    setIndexName
}) {
    const [selectedIndexType, setSelectedIndexType] = useState('equity');
    const [selectedIndexValue, setSelectedIndexValue] = useState();
    const [formData, setFormData] = useState({
        symbol: 'NIFTY 50',
        start_date: '1990-01-01',
        end_date: formattedDate
    })

    useEffect(() => {
        const fetchData = () =>{
            try {
                setDataFound(false);
                const res = APICaller.FetchDefaultIndexData(formData);
                if (res.status) {
                    setChartData(res.data);
                    setLabels(res.data.date);
                    setDataFound(true);
                    setIndexName(res.data.index_name);
                } else {
                    console.log('Failed to fetch NSE data');
                }
            }catch (error){
                console.error(error);
            }
        };
        fetchData();
        // Clean up function
        return () => {
            // my clean up code
        };
    },[formData, setChartData, setLabels, setDataFound, setIndexName]);

    function handleChange(event) {
        const { name, value } = event.target;
        setSelectedIndexType(value);
    }

    function handleChangeValue(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    function handelSubmit(event) {
        event.preventDefault();
    }
    return (
        <>
            <form className="form" >
                <select
                    className="form-control mt-4 mb-3"
                    onChange={handleChange}
                    name="selectedIndexType"
                >
                    {data.index_type.map((item, index) => {
                        return (
                            <option key={index} value={item.symbol}>{item.name}</option>
                        )
                    })}

                </select>
                {(() => {
                    switch (selectedIndexType) {
                        case 'equity':
                        case 'fix_income':
                        case 'multi_asset':
                            return (
                                <CustomSelect
                                    options={data[selectedIndexType]}
                                    name="symbol"
                                    onChange={handleChangeValue}
                                />
                            );
                        default:
                            return renderEmptySelection();
                    }
                })()}

                <div className="p-3">
                    <button className="btn text-light" onClick={handelSubmit} style={{
                        backgroundColor: "var(--teritary-color)",
                        marginLeft: "2rem"
                    }}>Submit</button>
                </div>
            </form>
        </>
    );
}