import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { indexTypes } from "./constants";
import { useQuery, QueryClient, useMutation } from 'react-query'

import { APICaller } from "../../scripts/server";
import { notyf } from "../../../common/utils/notfy";


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

    const navigate = useNavigate();

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
            setData(res.data.data)
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

            if (res.status == 401) {
                navigate('/login?next=/resources');
            } else if (res.status == 404 || res == undefined) {
                setDataFound(true);
                setNoData(true);
            } else if (res.status) {
                setDataFound(false);
                setNoData(false);
                let temp_chartData = {
                    pe: res.data.pe.data,
                    pb: res.data.pb.data,
                    divyield: res.data.divyield.data
                };
                setChartData(temp_chartData);
                let temp_labels = {
                    pe: res.data.pe.labels,
                    pb: res.data.pb.labels,
                    divyield: res.data.divyield.labels
                }
                setLabels(temp_labels);
                setDataFound(true);
                setIndexName(res.data.index_name);
                if (res.data == {}) {
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
        <section data-aos="zoom-in">
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

                <div>
                    <label htmlFor="start_date" className="form-label text-dark p-1">Start Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChangeValue}
                    />
                </div>
                <div>
                    <label htmlFor="end_date" className="form-label text-dark p-1">End Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChangeValue}
                        style={{
                            zIndex: "1000"
                        }}
                    />

                </div>

                <div className="p-3">
                    <button className="btn text-light" onClick={handelSubmit} style={{
                        backgroundColor: "var(--teritary-color)",
                        marginLeft: "2rem"
                    }}>Submit</button>
                </div>
            </form>
        </section>
    );
}