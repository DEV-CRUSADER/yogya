import React, { useEffect, useState } from "react";
import { indexTypes } from "./constants";
import { APICaller } from "../../scripts/server";

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import { useQuery, QueryClient, useMutation } from 'react-query'

const queryClient = new QueryClient();
const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'error',
            background: '#e74c3c',
            icon: {
                className: 'fas fa-exclamation-circle',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: true
        },
        {
            type: 'success',
            background: '#2ecc71',
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: true
        }
    ]
});

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

export function CustomSelect({ data, name, onChange, selectedIndexType }) {
    return (
        <select className="form-control" name={name} onChange={onChange}>
            {data != null && (
                data.map((item, index) => (
                    item.type === selectedIndexType && (
                        <option key={index} value={item.symbol}>{item.name}</option>
                    )
                ))
            )}
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
    setIndexName,
    setNoData,
    handleClose,
}) {

    const [selectedIndexType, setSelectedIndexType] = useState('equity');
    const [formData, setFormData] = useState({
        symbol: 'Nifty 50',
        start_date: '1990-01-01',
        end_date: formattedDate
    })
    const [data, setData] = useState(null)

    const query = useQuery({
        queryKey: 'indexes',
        queryFn: () => APICaller.FetchIndexes(),
        onSuccess: (res) => {
            setData(res.data)
        }
    })

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
        APICaller.FetchDefaultIndexData(formData).then((res) => {

            if (res.status == 401){
                return;
            }

            if (res.status == 404 || res == undefined) {
                setDataFound(true);
                setNoData(true);
                return;
            }

            if (res.status) {
                setChartData(res.data);
                setLabels(res.data.date);
                setDataFound(true);
                setIndexName(res.data.index_name);
                if (res.data == {}){
                    setNoData(true);
                    notyf.error("No data found for this index")
                }
            } else {
                notyf.error(res.errors);
            }
        });
        handleClose();
    }

    return (
        <>
            <form className="form" >
                <select
                    className="form-control mt-4 mb-3"
                    onChange={handleChange}
                    name="selectedIndexType"
                >
                    {indexTypes.map((item, index) => {
                        return (
                            <option key={index} value={item.symbol}>
                                {item.name}
                            </option>
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
                                    data={data}
                                    name="symbol"
                                    onChange={handleChangeValue}
                                    selectedIndexType={selectedIndexType}
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