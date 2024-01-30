import React, { useState, useEffect } from "react";
import "../../../../../css/dashboard/form.css";
import "../../../../../css/dashboard/datePicker.css";

import Insurance from "./insurance";
import { InvesmentsMultiple } from "./multipleFiels"
import AnyLoan from "./anyLoan";

export function ClientData() {
    const [investmentsStock, setInvestmentsStock] = useState([
        {
            date: "",
            scheme_name: "",
            amount: "",
            portfolio: "",
        },
    ]);
    const [investmentsLumpSum, setInvestmentsLumpSum] = useState([
        {
            date: "",
            scheme_name: "",
            amount: "",
            portfolio: "",
        },
    ]);
    const [investmentsSIP, setInvestmentsSIP] = useState([
        {
            date: "",
            scheme_name: "",
            amount: "",
            portfolio: "",
        },
    ]);
    const [investmentsFD, setInvestmentsFD] = useState([
        {
            date: "",
            scheme_name: "",
            amount: "",
            portfolio: "",
        },
    ]);
    const [investmentsOthers, setInvestmentsOthers] = useState([
        {
            date: "",
            scheme_name: "",
            amount: "",
            portfolio: "",
        },
    ]);

    const current_knowledge_values = [
        {
            value: null,
            label: "Choose Occupation"
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
            others: investmentsOthers,
        },
        loan: {},
        insurance: {},
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
                others: investmentsOthers,
            },
        })
    }, 
    [investmentsStock, investmentsFD, 
        investmentsLumpSum, investmentsOthers, investmentsSIP])

    const onChangeHandler = (event) => {
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <div className="w-100 w-sm-100 w-md-75 w-lg-75 w-xl-50">
            <h2>Client Forms</h2>
            <form>
                {/* Name */}
                <div className="form-group d-flex w-100">
                    <div className="flex-grow-1 me-2">
                        <label htmlFor="first_name" className="form-label">
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
                        <label htmlFor="last_name" className="form-label">
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
                    <label htmlFor="phoneNumber" className="form-label">
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
                    <label htmlFor="age" className="form-label">
                        Date of Birth
                    </label>
                    <br />
                    <input type="date" name="DOB" value={formData.DOB} onChange={onChangeHandler} className="form-control"/>
                </div>
                {/* Email */}
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label">
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
                    <label htmlFor="phoneNumber" className="form-label">
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
                    <label htmlFor="currentOccupation" className="form-label">
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
                    <label htmlFor="monthlySalary" className="form-label">
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
                    <label htmlFor="currentKnowledge" className="form-label">
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
                    <label htmlFor="anyGoals" className="form-label">
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
                    
                    <label className="form-label">Risk Tolarance</label>
                    <div className="d-flex row">
                        <div className="d-flex my-2">
                            <label htmlFor="riskBalance" className="w-25">
                                Low (5-15%)
                            </label>
                            <input
                                className="form-control"
                                name="risk_tolarance_low"
                                onChange={onChangeHandler}
                                value={formData.risk_tolarance_low}
                                placeholder="Text here.."
                            />
                        </div>
                        <div className="d-flex my-2">
                            <label htmlFor="riskBalance" className="w-25">
                                Mid (15-35%)
                            </label>
                            <input
                                className="form-control "
                                name="risk_tolarance_mid"
                                onChange={onChangeHandler}
                                value={formData.risk_tolarance_mid}
                                placeholder="Text here.."
                            />
                        </div>
                        <div className="d-flex my-2">
                            <label htmlFor="riskBalance" className="w-25">
                                High (30-50%)
                            </label>
                            <input
                                className="form-control "
                                name="risk_tolarance_high"
                                onChange={onChangeHandler}
                                value={formData.risk_tolarance_high}
                                placeholder="Text here.."
                            />
                        </div>
                    </div>
                </div>

                {/* Existing Invesment */}

                <div className="form-group">
                    <label htmlFor="exintingInvesment" className="form-label">
                        Existing Invesments In
                    </label>
                    <br />
                    <label value="stock">Stock</label>
                    <InvesmentsMultiple
                        inputFields={investmentsStock}
                        setInputFields={setInvestmentsStock}
                    />
                    <label value="mf">Mutual Funds (Lump Sum)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsLumpSum}
                        setInputFields={setInvestmentsLumpSum}
                    />
                    <label value="mf">Mutual Funds (SIP)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsSIP}
                        setInputFields={setInvestmentsSIP}
                    />
                    <label value="fd">Fixed Deposite (FD)</label>
                    <InvesmentsMultiple
                        inputFields={investmentsFD}
                        setInputFields={setInvestmentsFD}
                    />
                    <label value="others">Others</label>
                    <InvesmentsMultiple
                        inputFields={investmentsOthers}
                        setInputFields={setInvestmentsOthers}
                    />
                </div>

                {/* Any Loans  */}
                <div className="form-group">
                    <label htmlFor="anyLoan" className="form-label">
                        Any Loan On{" "}
                    </label>
                    <AnyLoan />
                </div>

                {/* Any Insurance  */}
                <div className="form-group">
                    <label htmlFor="currentInsurance" className="form-label">
                        Current Insurance Of Yours OR Family Dependents{" "}
                    </label>
                    <div className="d-flex row ">
                        <div>
                            <label value="healthInsurance">Health Insurance</label>
                            <Insurance />
                            <label value="termInsurance">Term Insurance</label>
                            <Insurance />
                            <label value="termInsurance">Others</label>
                            <Insurance />
                        </div>
                    </div>
                </div>

                {/* Current Emergency Funds-Cover */}
                <div className="form-group">
                    <label htmlFor="fundsCover" className="form-label">
                        Current Emergency Funds-Cover 6-Months Of Expence Or Not ?
                    </label>
                    <div>
                        <div>
                            <input
                                type="radio"
                                name="fundsCover"
                                value="yes"
                                onChange={onChangeHandler}
                                checked={formData.fundsCover === "yes"}
                            />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="fundsCover"
                                value="no"
                                onChange={onChangeHandler}
                                checked={formData.fundsCover === "no"}
                            />
                            <label htmlFor="no">No</label>
                        </div>
                        <input
                            className="form-control "
                            name="loanLimit"
                            onChange={onChangeHandler}
                            value={formData.loanLimit}
                            placeholder="How much.."
                        />
                    </div>
                </div>

                {/* Tax Brackets of Clients */}

                {/* How Can We Improve Ourselves */}
                <div className="form-group">
                    <label htmlFor="improve" className="form-label">
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
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
