import React, { useState } from "react";

import { data } from "./constants";

export function ChartsIndexFrom({ formData, setFormData }) {

    const [selectedIndexType, setSelectedIndexType] = useState('equity')
    const [selectIndexValue, setSelectIndexValue] = useState([])
    
    function handleChange(event) {
        const { name, value } = event.target;
        setSelectedIndexType(value);
    }

    function handleChangeValue(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value})
    }

    console.log(formData)

    return (
        <>
            <form className="form">
                <select className="form-control" onChange={handleChange} name="selectedIndexType">
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
                        <select className="form-control" name="symbol">
                            <option value="Select" className="form-control disabled">--Select--</option>
                        </select>
                    )
                }
                <div>
                <button className="btn btn-dark" >Submit</button>
                </div>


            </form>
        </>
    )
}