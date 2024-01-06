import React, { useState } from "react";
import { DatePicker } from 'rsuite';

import { data } from "./constants";
import { APICaller } from "../../scripts/server";

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

export function ChartsIndexFrom({ setChartData, setLabels, setDataFound, setIndexName }) {

    
    const [selectedIndexType, setSelectedIndexType] = useState('equity');
    const [selectedIndexValue, setSelectedIndexValue] = useState();
    const [formData, setFormData] = useState({
        symbol: 'NIFTY 50',
        start_date: '1990-01-01',
        end_date: formattedDate
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setSelectedIndexType(value);
    }

    function handleChangeValue(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    // console.log(formData)

    function handelSubmit(event) {
     event.preventDefault();
     console.log(formData);
     setDataFound(false);
     APICaller.FetchDefaultIndexData(formData).then((res) =>{
        console.log(res);
        if (!res.ok) {
            if (res.status){
                setChartData(res.data);
                setLabels(res.data.date);
                setDataFound(true);
                setIndexName(res.data.index_name);
            } else {
                console.log('Failed to fetch NSE data')
            }
        } else {
            console.log(res)
        }
     });
        
    }

    


    return (
        <>
            <form className="form" >
                <select className="form-control mt-4 mb-3" onChange={handleChange} name="selectedIndexType">
                    {data.index_type.map((item, index) => {
                        return (
                            <option key={index} value={item.symbol}>{item.name}</option>
                        )
                    })}
                </select>
                {
                    (selectedIndexType === 'equity') ? (
                        <select className="form-control" name="symbol" onChange={handleChangeValue}>
                            {data.equity.map((item, index) => (
                                <option key={index} value={item.symbol}>{item.name}</option>
                            ))}
                        </select>
                    ) : (selectedIndexType === 'fix_income') ? (
                        <select className="form-control" name="symbol" onChange={handleChangeValue}>
                            {data.fix_income.map((item, index) => (
                                <option key={index} value={item.symbol}>{item.name}</option>
                            ))}
                        </select>
                    ) : (selectedIndexType === 'multi_asset') ? (
                        <select className="form-control" name="symbol" onChange={handleChangeValue}>
                            {data.multi_asset.map((item, index) => (
                                <option key={index} value={item.symbol}>{item.name}</option>
                            ))}
                        </select>
                    ) : (
                        <div style={{
                            marginTop: "5px"
                        }}>
                            <h3>Select Index</h3>
                            <select className="form-control p-1" name="symbol">
                                <option value="Select" className="form-control disabled">--Select--</option>
                            </select>
                        </div>
                    )
                }
                


            </form>


            <div className="p-3">
                    <button className="btn text-light" onClick={handelSubmit} style={{
                        backgroundColor: "var(--teritary-color)",
                        marginLeft: "2rem"
                    }}>Submit</button>
                </div>
        </>
    )
}