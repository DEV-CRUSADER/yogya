import React, { useState } from "react";

import { data } from "./constants";
import { APICaller } from "../../scripts/server";

export function ChartsIndexFrom() {

    
    const [selectedIndexType, setSelectedIndexType] = useState('equity')
    const [formData, setFormData] = useState()

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
    //  console.log(formData);
     setDataFound(false);
     APICaller.FetchDefaultIndexData(formData).then((res) =>{
        console.log(res);
        if (!res.ok) {
            if (res.status){
                setChartData(res.data);
                setLabels(res.data.date);
                setDataFound(true);

                const indexName = data.index_type.filter((item) => item.symbol === formData.selectedIndexType);
                indexName(indexName);
            } else {
                console.log('Failed to fetch NSE data')
            }
        } else {
            console.log(res)
        }
     })
        
    }

    


    return (
        <>
            <form className="form" >
                <select className="form-control mt-4 mb-5" onChange={handleChange} name="selectedIndexType">
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
                            marginTop: "10px"
                        }}>
                            <h3>Select Index</h3>
                            <select className="form-control p-4" name="symbol">
                                <option value="Select" className="form-control disabled">--Select--</option>
                            </select>
                        </div>
                    )
                }
                <div className="p-5">
                    <button className="btn btn-dark" onClick={handelSubmit}>Submit</button>
                </div>


            </form>
        </>
    )
}