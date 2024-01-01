import React, { useState } from "react";

import { data } from "./constants";

const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;


export function ChartsIndexFrom() {

    const [selectedIndexType, setSelectedIndexType] = useState('equity')
    const [selectIndexValue, setSelectIndexValue] = useState([])

    const [formData, setFormData] = useState({
        symbol: '',
        start_date: '1990-01-01',
        end_date: formattedDate,
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setSelectedIndexType(value);
        // setSelectedIndexType(event.target.value)
        // setSelectIndexValue(selectedIndexType.find(changed => changed.name === event.target.value).setSelectedIndexType)
    }

    console.log(selectedIndexType)

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
                        <select className="form-control" name="selectIndexValue">
                            {data.equity.map((item, index) => (
                                <option key={index} value={item.symbol}>{item.name}</option>
                            ))}
                        </select>
                    ) : (selectedIndexType === 'fix_income') ? (
                        <select className="form-control" name="selectIndexValue">
                            {data.fix_income.map((item, index) => (
                                <option key={index} value={item.symbol}>{item.name}</option>
                            ))}
                        </select>
                    ) : (selectedIndexType === 'multi_asset') ? (
                        <select className="form-control" name="selectIndexValue">
                            {data.multi_asset.map((item, index) => (
                                <option key={index} value={item.symbol}>{item.name}</option>
                            ))}
                        </select>
                    ) : (
                        <select className="form-control" name="selectIndexValue">
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