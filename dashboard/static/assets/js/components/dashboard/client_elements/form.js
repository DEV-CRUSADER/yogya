import React, { useState, useEffect } from "react";
import "../../../../../css/dashboard/form.css";
import "../../../../../css/dashboard/datePicker.css";

import { Checkbox, CheckboxGroup } from 'rsuite';

import { InvesmentsMultiple, Insurance, AnyLoan, EmergencyFund } from "./multipleFiels"

export function ClientDataForm() {

    const handleChange = (key, value) => {
        setFormData(prevState => ({
            ...prevState,
            emergency_funds: {
                ...prevState.emergency_funds,
                [key]: value
            }
        }));
    };

    const [investmentsStock, setInvestmentsStock] = useState([
        {
            type: "stock",
            investment_date: "",
            scheme_name: "",
            quantity: "",
            amount: "",
            market_value: "",
            portfolio: "",
            stock_bal_left: "",
        },
    ]);
    const [investmentsLumpSum, setInvestmentsLumpSum] = useState([
        {
            type: "lump_sum",
            investment_date: "",
            scheme_name: "",
            amount: "",
            market_value: "",
            portfolio: "",
            mf_lump_sum_bal_left: "",
        },
    ]);
    const [investmentsSIP, setInvestmentsSIP] = useState([
        {
            type: "sip",
            investment_date: "",
            scheme_name: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [investmentsFD, setInvestmentsFD] = useState([
        {
            type: "fixed_deposit",
            investment_date: "",
            scheme_name: "",
            fixed_deposit: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [investmentsDebt, setInvestmentsDebt] = useState([
        {
            type: "debt_quantity",
            investment_date: "",
            scheme_name: "",
            debt_quantity: "",
            amount: "",
            market_value: "",
            debt_yield: "",
            // portfolio: "",
        },
    ]);
    const [investmentsOthers, setInvestmentsOthers] = useState([
        {
            type: "others",
            investment_date: "",
            scheme_name: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [healthInsurance, setHealthInsurance] = useState([
        {
            type: "health",
            company_name: "",
            scheme_name: "",
            scheme_type: "",
            annual_premium: "",
            sum_assured: "",
        },
    ]);
    const [termInsurance, setTermInsurance] = useState([
        {
            type: "term",
            company_name: "",
            scheme_name: "",
            scheme_type: "",
            annual_premium: "",
            sum_assured: "",
        },
    ]);
    const [otherInsurance, setOtherInsurance] = useState([
        {
            type: "other",
            company_name: "",
            scheme_name: "",
            scheme_type: "",
            annual_premium: "",
            sum_assured: "",
        },
    ]);
    const [anyLoan, setAnyLoan] = useState([
        {
            loan_type: "",
            amount: "",
        },
    ]);



    const current_knowledge_values = [
        {
            value: null,
            label: "Choose"
        },
        {
            value: "low",
            label: "Low"
        },
        {
            value: "intermediate",
            label: "Intermediate"
        },
        {
            value: "high",
            label: "High"
        }
    ]

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        birthdate: "",
        pancard: "",
        email: "",
        current_occupation: "",
        salary: "",
        current_knowledge: "",
        goals: "",
        risk_tolarance: {
            low: "",
            mid: "",
            high: "",
        },
        investment: [
            investmentsStock,
            investmentsLumpSum,
            investmentsSIP,
            investmentsFD,
            investmentsDebt,
            investmentsOthers,
        ],
        loan: [
            anyLoan,
        ],
        insurance: [
            healthInsurance,
            termInsurance,
            otherInsurance,
        ],
        emergency_funds: {
            emergency_input_value: "no",
            address: ""
        },
        stock_bal_left: "",
        mf_lump_sum_bal_left: "",
        waiting: {
            stocks_on_hold: false,
            MF_on_hold: false
        }
    });




    const [stocks_on_hold, setStocks_on_hold] = useState(false);
    const [MF_on_hold, setMF_on_hold] = useState(false);

    const handleStockBalLeftChange = (index, value) => {
        const updatedInvestmentsStock = [...investmentsStock];
        updatedInvestmentsStock[index] = {
            ...updatedInvestmentsStock[index],
            stock_bal_left: value,
        };
        setInvestmentsStock(updatedInvestmentsStock);
    };

    const handleMFLumpSumBalLeftChange = (index, value) => {
        const updatedInvestmentsLumpSum = [...investmentsLumpSum];
        updatedInvestmentsLumpSum[index] = {
            ...updatedInvestmentsLumpSum[index],
            mf_lump_sum_bal_left: value,
        };
        setInvestmentsLumpSum(updatedInvestmentsLumpSum);
    };

    const onChangeHandler = (event, index) => {
        const { name, value } = event.target;
        // const uppercaseValue = name === "pancard" ? value.toUpperCase() : value;

        //for investment
        setFormData(prevState => ({
            ...prevState,
            investment: formData.investment.map((item, i) => {
                if (i === index) {
                    return { ...item, [name]: value };
                }
                return item;
            })
        }));

        // For loan
        setFormData(prevState => ({
            ...prevState,
            loan: formData.loan.map((item, i) => {
                if (i === index) {
                    return { ...item, [name]: value };
                }
                return item;
            })
        }));

        // For insurance
        setFormData(prevState => ({
            ...prevState,
            insurance: formData.insurance.map((item, i) => {
                if (i === index) {
                    return { ...item, [name]: value };
                }
                return item;
            })
        }));

        // For risk tolerance inputs, update
        if (["low", "mid", "high"].includes(name)) {
            setFormData(prevFormData => ({
                ...prevFormData,
                risk_tolarance: {
                    ...prevFormData.risk_tolarance,
                    [name]: value
                }
            }));
        }
        // For DOB, format the date and update
        if (name === "birthdate") {
            const formattedDate = new Date(value).toISOString().split('T')[0];
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: formattedDate
            }));
        }
        else {
            // For other inputs, update normally
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleCheckboxChange = (value) => {
        if (value === 'Stocks') {
            const newStocksOnHold = !stocks_on_hold;
            setStocks_on_hold(newStocksOnHold);
            const updatedFormData = {
                ...formData,
                waiting: {
                    ...formData.waiting,
                    stocks_on_hold: newStocksOnHold
                }
            };
            setFormData(updatedFormData);
        } else if (value === 'MF') {
            const newMFOnHold = !MF_on_hold;
            setMF_on_hold(newMFOnHold);
            const updatedFormData = {
                ...formData,
                waiting: {
                    ...formData.waiting,
                    MF_on_hold: newMFOnHold
                }
            };
            setFormData(updatedFormData);
        }
    };


    return (
        <div className="w-100 w-sm-100 w-md-75 w-lg-75 w-xl-50">
            <form method="post" action="submit_form" id="client_form">
                {/* Name */}
                <div className="form-group d-flex w-100">
                    <div className="flex-grow-1 me-2">
                        <label className="form-label fs-4 fw-bold">
                            First Name
                        </label>
                        <input
                            className="form-control"
                            name="first_name"
                            onChange={onChangeHandler}
                            value={formData.first_name}
                            placeholder="First name"
                        />
                    </div>
                    <div className="flex-grow-1">
                        <label className="form-label fs-4 fw-bold" >
                            Last Name
                        </label>
                        <input
                            className="form-control"
                            name="last_name"
                            onChange={onChangeHandler}
                            value={formData.last_name}
                            placeholder="Last name"
                        />
                    </div>
                </div>
                {/* Phone Number */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        Phone Number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="phone_number"
                        onChange={onChangeHandler}
                        value={formData.phone_number}
                        placeholder="Phone Number"
                    />
                </div>
                {/* Age, need a backend */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        Date of Birth
                    </label>
                    <br />
                    <input type="date" name="birthdate" value={formData.birthdate} onChange={onChangeHandler} className="form-control" placeholder="yyyy-mm-dd" />
                </div>
                {/* Email */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        Email ID
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={onChangeHandler}
                        value={formData.email}
                        placeholder="Email"
                    />
                </div>
                {/* PanCard No. */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        PanCard Number
                    </label>
                    <input
                        className="form-control"
                        name="pancard"
                        onChange={onChangeHandler}
                        value={formData.pancard}
                        placeholder="PanCard No."
                    />
                </div>
                {/* Occupations */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        Current Occupation
                    </label>
                    <select
                        className="form-select"
                        name="current_occupation"
                        onChange={onChangeHandler}
                        value={formData.current_occupation}
                    >
                        <option value="Salaried">Salaried</option>
                        <option value="Slef-Employed">Slef-Employed</option>
                        <option value="Retired">Retired</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {/* Monthly Salary */}
                <div className="form-group col">
                    <div>
                        <label className="form-label fs-4 fw-bold">
                            Monthly Salary (&#8377;)
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            name="salary"
                            onChange={onChangeHandler}
                            value={formData.salary}
                            placeholder="Your Salary"
                        />
                    </div>
                    <div>
                        <div className="col-md-6">
                            {/* Display EmergencyFund component here */}
                            <EmergencyFund
                                emergency_input_value={formData.emergency_funds.emergency_input_value}
                                emergencyFundAddress={formData.emergency_funds.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                {/* Current knowledge about mutual funds */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        Current Knowledge About Mutual Funds
                    </label>
                    <select
                        className="form-select"
                        name="current_knowledge"
                        onChange={onChangeHandler}
                        value={formData.current_knowledge}
                    >
                        {current_knowledge_values.map((item, index) => (
                            <option value={item.value} key={index}>{item.label}</option>
                        ))}
                    </select>
                </div>

                {/* Any goals */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        Any Specific Goals In Mind
                    </label>
                    <input
                        className="form-control"
                        name="goals"
                        onChange={onChangeHandler}
                        value={formData.goals}
                        placeholder="Your Goals"
                    />
                </div>

                {/* Risk Tolarance*/}
                <div className="form-group">

                    <label className="form-label fs-4 fw-bold">Risk Tolarance</label>
                    <div className="d-flex row">
                        <div className="d-flex my-2">
                            <label className="w-25 fs-5 fw-bold">
                                Low (5-15%)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="low"
                                onChange={onChangeHandler}
                                placeholder="Enter Number"
                            />
                        </div>
                        <div className="d-flex my-2">
                            <label className="w-25 fs-5 fw-bold">
                                Mid (15-35%)
                            </label>
                            <input
                                type="number"
                                className="form-control "
                                name="mid"
                                onChange={onChangeHandler}
                                placeholder="Enter Number"
                            />
                        </div>
                        <div className="d-flex my-2">
                            <label className="w-25 fs-5 fw-bold">
                                High (30-50%)
                            </label>
                            <input
                                type="number"
                                className="form-control "
                                name="high"
                                onChange={onChangeHandler}
                                placeholder="Enter Number"
                            />
                        </div>
                    </div>
                </div>

                {/* Existing Invesment */}

                <div className="form-group align-items-center">
                    <label className="form-label fs-4 fw-bold">
                        Existing Invesments In
                    </label>
                    <br />
                    <label className="fs-5 fw-bold" value="stock">Stock</label>
                    <InvesmentsMultiple
                        inputFields={investmentsStock}
                        setInputFields={setInvestmentsStock}
                        type="stock"
                    />
                    <div className="row mt-0">
                        <div className="col">
                            <label className="fs-5 fw-bold">Cash</label>
                        </div>
                        <div className="col-11 align-items-start ">
                            <input
                                style={{ width: '15%', marginLeft: '10px' }}
                                name="stock_bal_left"
                                className="form-control"
                                placeholder="Cash left"
                                value={investmentsStock[0]?.stock_bal_left || ""}
                                onChange={(e) => handleStockBalLeftChange(0, e.target.value)}
                            />
                        </div>
                    </div>
                    <label className="fs-5 fw-bold" value="mf">Mutual Funds (Lump Sum)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsLumpSum}
                        setInputFields={setInvestmentsLumpSum}
                        type="lump_sum"
                    />
                    <div className="row mt-0">
                        <div className="col">
                            <label className="fs-5 fw-bold">Cash</label>
                        </div>
                        <div className="col-11 align-items-start">
                            <input
                                style={{ width: '15%', marginLeft: '10px' }}
                                name="mf_lump_sum_bal_left"
                                className="form-control"
                                placeholder="Cash left"
                                value={investmentsLumpSum[0]?.mf_lump_sum_bal_left || ""}
                                onChange={(e) => handleMFLumpSumBalLeftChange(0, e.target.value)}
                            />
                        </div>
                    </div>
                    <label className="fs-5 fw-bold" value="mf">Mutual Funds (SIP)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsSIP}
                        setInputFields={setInvestmentsSIP}
                        type="sip"
                    />
                    <label className="fs-5 fw-bold" value="fd">Fixed Deposite (FD)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsFD}
                        setInputFields={setInvestmentsFD}
                        type="fixed_deposit"
                    />
                    <label className="fs-5 fw-bold" value="debt">Debt</label>
                    <InvesmentsMultiple
                        inputFields={investmentsDebt}
                        setInputFields={setInvestmentsDebt}
                        type="debt_quantity"
                    />
                    <label className="fs-5 fw-bold" value="others">Others</label>
                    <InvesmentsMultiple
                        inputFields={investmentsOthers}
                        setInputFields={setInvestmentsOthers}
                        type="others"
                    />
                </div>

                {/* Any Loans  */}
                <div className="form-group" style={{ width: "100%" }}>
                    <label className="form-label fs-4 fw-bold">
                        Any Loan On
                    </label>
                    <AnyLoan
                        inputFields={anyLoan}
                        setInputFields={setAnyLoan} />
                </div>

                {/* Any Insurance  */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        Current Insurance Of Yours OR Family Dependents{" "}
                    </label>
                    <div className="d-flex row ">
                        <div>
                            <label className="fs-5 fw-bold" value="healthInsurance">Health Insurance</label>
                            <Insurance
                                inputFields={healthInsurance}
                                setInputFields={setHealthInsurance}
                                type="health"
                            />
                            <label className="fs-5 fw-bold" value="termInsurance">Term Insurance</label>
                            <Insurance
                                inputFields={termInsurance}
                                setInputFields={setTermInsurance}
                                type="term"
                            />
                            <label className="fs-5 fw-bold" value="otherInsurance">Others</label>
                            <Insurance
                                inputFields={otherInsurance}
                                setInputFields={setOtherInsurance}
                                type="other"
                            />
                        </div>
                    </div>
                </div>
                {/* How Can We Improve Ourselves */}
                <div className="form-group">
                    <label className="form-label fs-4 fw-bold">
                        How Can We Improve Ourselves
                    </label>
                    <textarea
                        className="form-control  "
                        name="feedback"
                        onChange={onChangeHandler}
                        value={formData.feedback}
                        placeholder="Your Suggestions"
                    />
                </div>
                <div>
                    <CheckboxGroup inline name="checkboxList">
                        <Checkbox
                            value="Stocks"
                            name="stock_hold"
                            checked={stocks_on_hold}
                            onChange={() => handleCheckboxChange('Stocks')}
                        >
                            Add to stock waiting list
                        </Checkbox>
                        <Checkbox
                            value="MF"
                            name="mf_hold"
                            checked={MF_on_hold}
                            onChange={() => handleCheckboxChange('MF')}
                        >
                            Add to mutual funds waiting list
                        </Checkbox>
                    </CheckboxGroup>
                </div>
                <div className="form-group">
                    <button className="btn" style={{
                        background: "var(--secondary-color)",
                        color: "var(--white)"
                    }}
                        onClick={(e) => {
                            e.preventDefault()
                            console.log(formData)
                        }}
                    >
                        Add Client
                    </button>
                </div>
            </form>
        </div>
    );
}
