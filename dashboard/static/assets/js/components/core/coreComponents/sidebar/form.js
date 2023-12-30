import React, { useState } from "react";

import { data } from "./constants";

const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;


export function ChartsIndexFrom() {

    const [selectedIndexType, setSelectedIndexType] = useState('')
    const [selectedSymbol, setSelectedSymbol] = useState('');

    const [formData, setFormData] = useState({
        symbol: '',
        start_date: '1990-01-01',
        end_date: formattedDate,
    })
    console.log(formData)

    const handleIndexTypeChange = (value) => {
        setSelectedIndexType(value);
        setSelectedSymbol('');
    };

    const handleSymbolChange = (value) => {
        setSelectedSymbol(value);
    };


    return (
        <>
            <form className="form">


                <h1 className="row fs-6 m-1">Select an Index Type</h1>
                <select
                    className="form-control"
                    value={selectedIndexType}
                    onChange={(e) => handleIndexTypeChange(e.target.value)}
                >
                    {data.index_type.map((item, index) => (
                        <option key={index} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
                

                {selectedIndexType === 'equity' && (
                    <select
                        className="form-control"
                        value={selectedSymbol}
                        onChange={(e) => handleSymbolChange(e.target.value)}
                    >
                        {data.equity.map((item, index) => (
                            <option key={index} value={item.symbol}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                )}

                {selectedIndexType === 'fix_income' && (
                    <select
                        className="form-control"
                        value={selectedSymbol}
                        onChange={(e) => handleSymbolChange(e.target.value)}
                    >
                        {data.fix_income.map((item, index) => (
                            <option key={index} value={item.symbol}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                )}

                {selectedIndexType === 'multi_asset' && (
                    <select
                        className="form-control"
                        value={selectedSymbol}
                        onChange={(e) => handleSymbolChange(e.target.value)}
                    >
                        {data.multi_asset.map((item, index) => (
                            <option key={index} value={item.symbol}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                )}



                <div className="mt-5">
                    <h1 className="row fs-6 m-1">Select an Index</h1>
                    <select className="form-control" value={selectedSymbol} onChange={(e) => handleSymbolChange(e.target.value)}>
                    </select>
                </div>

            </form>

            <>
                <div>
                    <button type="submit" className="btn m-4 text-light" style={{
                        background: "var(--teritary-color)"
                    }}>Submit</button>
                </div>

            </>

        </>

    );


}