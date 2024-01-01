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
        setSelectedIndexType(event.target.value)
        setSelectIndexValue(selectedIndexType.find(changed => changed.name === event.target.value).setSelectedIndexType)
    }

    console.log(formData)

    return (
        <>
            <form className="form">
                <select className="form-control" onChange={handleChange}>
                    <option>--Select--</option>
                    {data.index_type.map((item, index) => {
                        return (
                            <option key={index} value={item.value}>{item.name}</option>
                        )
                    })}
                </select>
                {selectedIndexType === 'equity' ? () => {
                    return (
                        <select className="form-control">
                            {data.equity.map((item, index) => {
                                return (
                                    <option key={index} value={item.symbol}>{item.name}</option>
                                )
                            })}
                        </select>
                    )
                } : selectedIndexType === 'fix_income' ? () => {
                    return (
                        <select className="form-control">
                            {data.fix_income.map((item, index) => {
                                return (
                                    <option key={index} value={item.symbol}>{item.name}</option>
                                )
                            })}
                        </select>
                    )
                } : selectedIndexType === 'multi_asset' ? () => {
                    return (
                        <select className="form-control">
                            {data.multi_asset.map((item, index) => {
                                return (
                                    <option key={index} value={item.symbol}>{item.name}</option>
                                )
                            })}
                        </select>
                    )
                } : null}
                <div><hr></hr></div>
                <select className="form-control">
                    <option>--Select--</option>
                    {data.selectIndexValue.map((item, index) => {
                        return (
                            <option value={item.value}>{item.name}</option>
                        )
                    })}
                </select>

                <div>
                <button class="btn" >Submit</button>
                </div>


            </form>
        </>
    )
}