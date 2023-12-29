import React, { useState } from "react";

import { data } from "./constants";

const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;


export function ChartsIndexFrom() {

    const [setselectedIndexType, setSetselectedIndexType] = useState('equity')

    const [formData, setFormData] = useState({
        symbol: '',
        start_date: '1990-01-01',
        end_date: formattedDate,
    })

    console.log(formData)

    return (
        <>
            <form className="form">
                <select className="form-control">
                    {data.index_type.map((item, index) => {
                        return (
                            <option key={index} value={item.value}>{item.name}</option>
                        )
                    })}
                </select>
                {setselectedIndexType === 'equity' ? () => {
                    return (
                        <select className="form-control">
                            {data.equity.map((item, index) => {
                                return (
                                    <option key={index} value={item.symbol}>{item.name}</option>
                                )
                            })}
                        </select>
                    )
                } : setselectedIndexType === 'fix_income' ? () => {
                    return (
                        <select className="form-control">
                            {data.fix_income.map((item, index) => {
                                return (
                                    <option key={index} value={item.symbol}>{item.name}</option>
                                )
                            })}
                        </select>
                    )
                } : setselectedIndexType === 'mutiAsset' ? () => {
                    return (
                        <select className="form-control">
                            {data.mutiAsset.map((item, index) => {
                                return (
                                    <option key={index} value={item.symbol}>{item.name}</option>
                                )
                            })}
                        </select>
                    )
                } : null}
            </form>
        </>
    )
}