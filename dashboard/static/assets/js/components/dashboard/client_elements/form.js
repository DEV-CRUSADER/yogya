import React, { useState, useEffect } from "react";
import "../../../../../css/dashboard/form.css";
import "../../../../../css/dashboard/datePicker.css";

import { Checkbox, CheckboxGroup } from 'rsuite';

function Defaulthideshow() {
    const [showhide, setShowhide] = useState("no");

    const handleshow = e => {
        const getshow = e.target.value;
        setShowhide(getshow);
    }
}

import { InvesmentsMultiple, Insurance, AnyLoan } from "./multipleFiels"

export function ClientData() {
    const [investmentsStock, setInvestmentsStock] = useState([
        {
            date: "",
            scheme_name: "",
            quantity: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [investmentsLumpSum, setInvestmentsLumpSum] = useState([
        {
            date: "",
            scheme_name: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [investmentsSIP, setInvestmentsSIP] = useState([
        {
            date: "",
            scheme_name: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [investmentsFD, setInvestmentsFD] = useState([
        {
            date: "",
            scheme_name: "",
            fixed_deposit: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [investmentsDebt, setInvestmentsDebt] = useState([
        {
            date: "",
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
            date: "",
            scheme_name: "",
            amount: "",
            market_value: "",
            portfolio: "",
        },
    ]);
    const [healthInsurance, setHealthInsurance] = useState([
        {
            company_name: "",
            scheme_name: "",
            scheme_type: "",
            annual_premium: "",
            sum_assured: "",
        },
    ]);
    const [termInsurance, setTermInsurance] = useState([
        {
            company_name: "",
            scheme_name: "",
            scheme_type: "",
            annual_premium: "",
            sum_assured: "",
        },
    ]);
    const [otherInsurance, setOtherInsurance] = useState([
        {
            company_name: "",
            scheme_name: "",
            scheme_type: "",
            annual_premium: "",
            sum_assured: "",
        },
    ]);
    const [anyLoan, setAnyLoan] = useState([
        {
            anyLoan: "",
            loan: "",
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
        DOB: "",
        pancard: "",
        email: "",
        current_occupation: "",
        salary: "",
        current_knowledge: "",
        goals: "",
        risk_tolarance_low: "",
        risk_tolarance_mid: "",
        risk_tolarance_high: "",
        invesment: {
            stocks: investmentsStock,
            lump_sum: investmentsLumpSum,
            sip: investmentsSIP,
            fd: investmentsFD,
            debt: investmentsDebt,
            others: investmentsOthers,
        },
        loan: {},
        insurance: {
            healthInsurance: healthInsurance,
            termInsurance: termInsurance,
            otherInsurance: otherInsurance,
        },
        emergency_funds: {},
        feedback: "",
    });

    useEffect(() => {
        setFormData({
            ...formData,
            invesment: {
                stocks: investmentsStock,
                lump_sum: investmentsLumpSum,
                sip: investmentsSIP,
                fd: investmentsFD,
                debt: investmentsDebt,
                others: investmentsOthers,
            },
        })
    },
        [investmentsStock, investmentsLumpSum, investmentsSIP,
            investmentsFD, investmentsDebt, investmentsOthers,])

    useEffect(() => {
        setFormData({
            ...formData,
            insurance: {
                healthInsurance: healthInsurance,
                termInsurance: termInsurance,
                otherInsurance: otherInsurance,
            },
        })
    },
        [healthInsurance, termInsurance, otherInsurance])

    const onChangeHandler = (event) => {
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value,
        }));
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
                    <input type="date" name="DOB" value={formData.DOB} onChange={onChangeHandler} className="form-control" />
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
                <div className="form-group">
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
                                // type="number"
                                className="form-control"
                                name="risk_tolarance_low"
                                onChange={onChangeHandler}
                                value={formData.risk_tolarance_low}
                                placeholder="Enter Number"
                            />
                        </div>
                        <div className="d-flex my-2">
                            <label className="w-25 fs-5 fw-bold">
                                Mid (15-35%)
                            </label>
                            <input
                                className="form-control "
                                name="risk_tolarance_mid"
                                onChange={onChangeHandler}
                                value={formData.risk_tolarance_mid}
                                placeholder="Enter Number"
                            />
                        </div>
                        <div className="d-flex my-2">
                            <label className="w-25 fs-5 fw-bold">
                                High (30-50%)
                            </label>
                            <input
                                className="form-control "
                                name="risk_tolarance_high"
                                onChange={onChangeHandler}
                                value={formData.risk_tolarance_high}
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
                    <label className="fs-5 fw-bold" value="mf">Mutual Funds (Lump Sum)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsLumpSum}
                        setInputFields={setInvestmentsLumpSum}
                    />
                    <label className="fs-5 fw-bold" value="mf">Mutual Funds (SIP)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsSIP}
                        setInputFields={setInvestmentsSIP}
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
                            />
                            <label className="fs-5 fw-bold" value="termInsurance">Term Insurance</label>
                            <Insurance
                                inputFields={termInsurance}
                                setInputFields={setTermInsurance}
                            />
                            <label className="fs-5 fw-bold" value="otherInsurance">Others</label>
                            <Insurance
                                inputFields={otherInsurance}
                                setInputFields={setOtherInsurance}
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
                        name="improve"
                        onChange={onChangeHandler}
                        value={formData.improve}
                        placeholder="Your Suggestions"
                    />
                </div>
                <div>
                    <CheckboxGroup inline name="checkboxList">
                        <Checkbox value="A">Add to stock waiting list</Checkbox>
                        <Checkbox value="B">Add to mutual funds waiting list</Checkbox>
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
