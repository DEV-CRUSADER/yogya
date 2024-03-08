import React, { useState, useEffect } from "react";
import "../../../../../css/dashboard/form.css";
import "../../../../../css/dashboard/datePicker.css";

import { Checkbox, CheckboxGroup } from 'rsuite';

const familyMembers = [
    {
        "id": 1,
        "name": "Sukla"
    },
    {
        "id": 2,
        "name": "Shah"
    },
    {
        "id": 3,
        "name": "Sharma"
    },
    {
        "id": 4,
        "name": "Patel"
    },
    {
        "id": 5,
        "name": "Other"
    },
]

// function Defaulthideshow() {
//     const [showhide, setShowhide] = useState("no");

//     const handleshow = e => {
//         const getshow = e.target.value;
//         setShowhide(getshow);
//     }
// }

import { InvesmentsMultiple, Insurance, AnyLoan } from "./multipleFiels"

export function ClientDataForm() {
    const [investmentsStock, setInvestmentsStock] = useState([
        {
            date: "",
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
            date: "",
            scheme_name: "",
            amount: "",
            market_value: "",
            portfolio: "",
            mf_lump_sum_bal_left: "",
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
        loan: {
            anyLoan: anyLoan,
            // loan: "",
        },
        insurance: {
            healthInsurance: healthInsurance,
            termInsurance: termInsurance,
            otherInsurance: otherInsurance,
        },
        // emergency_funds: {},
        feedback: "",
        family_name: "",
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

    // update stocks and MF(Lump Sum) Balance left
    const handleMFLumpSumBalLeftChange = (index, value) => {
        const updatedInvestmentsLumpSum = [...investmentsLumpSum];
        updatedInvestmentsLumpSum[index].mf_lump_sum_bal_left = value;
        setInvestmentsLumpSum(updatedInvestmentsLumpSum);
    };

    const handleStockBalLeftChange = (index, value) => {
        const updatedInvestmentsStock = [...investmentsStock];
        updatedInvestmentsStock[index].stock_bal_left = value;
        setInvestmentsStock(updatedInvestmentsStock);
    };

    const onChangeHandler = (event) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
        }));
    };


    const [stocks_on_hold, setStocks_on_hold] = useState(false);
    const [MF_on_hold, setMF_on_hold] = useState(false);

    const handleCheckboxChange = (value) => {
        let updatedFormData = { ...formData };


        if (value === 'Stocks') {
            const newStocksOnHold = !stocks_on_hold;
            setStocks_on_hold(newStocksOnHold);
            updatedFormData.stocks_on_hold = newStocksOnHold;
        } else if (value === 'MF') {
            const newMFOnHold = !MF_on_hold;
            setMF_on_hold(newMFOnHold);
            updatedFormData.MF_on_hold = newMFOnHold;
        }
        setFormData(updatedFormData);
    };


    const [showInvesment, setShowInvesment] = useState(false);
    const handleInvesmentCheckbox = (e) => {
        setShowInvesment(e.target.checked);
    };

    const [showInsurance, setShowInsurance] = useState(false);
    const handleInsuranceCheckbox = (e) => {
        setShowInsurance(e.target.checked);
    };

    const [showFamilyList, setShowFamilyList] = useState(false);
    const [selectedFamilyMember, setSelectedFamilyMember] = useState('');
    const [newFamilyMember, setNewFamilyMember] = useState('');
    const [familyMembersList, setFamilyMembersList] = useState(familyMembers);

    const handleFamilyChange = (checked) => {
        setShowFamilyList(checked);
    };


    const handleFamilyMemberChange = (event) => {
        setSelectedFamilyMember(event.target.value);
        if (event.target.value !== "Other") {
            setNewFamilyMember('');
            setFormData(prevFormData => ({
                ...prevFormData,
                family_name: event.target.value,
            }));
        }
    };

    const handleNewFamilyMemberChange = (event) => {
        setNewFamilyMember(event.target.value);
    };

    const handleAddFamilyMember = () => {
        if (newFamilyMember.trim() !== "") {
            const newMemberId = familyMembersList.length + 1;
            const newMember = { id: newMemberId, name: newFamilyMember.trim() };
            setFamilyMembersList([...familyMembersList, newMember]);
            setSelectedFamilyMember(newFamilyMember.trim());
            setNewFamilyMember('');
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

                {/* Any Loans  */}
                <div className="form-group" style={{ width: "100%" }}>
                    <label className="form-label fs-4 fw-bold">
                        Any Loan On
                    </label>
                    <AnyLoan
                        inputFields={anyLoan}
                        setInputFields={setAnyLoan} />
                </div>

                {/* Existing Invesment */}
                <div>
                    <div className="form-group col">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="showInvesmentDiv"
                            onChange={handleInvesmentCheckbox}
                        />
                        <label className="form-label fs-4 fw-bold" htmlFor="showInvesmentDiv">Existing Investment</label>

                        {showInvesment && (
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
                                            value={investmentsStock[0].stock_bal_left}
                                            onChange={(e) => handleStockBalLeftChange(0, e.target.value)}
                                        />
                                    </div>
                                </div>
                                <label className="fs-5 fw-bold" value="mf">Mutual Funds (Lump Sum)</label>
                                <InvesmentsMultiple
                                    inputFields={investmentsLumpSum}
                                    setInputFields={setInvestmentsLumpSum}
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
                                            value={investmentsLumpSum[0].mf_lump_sum_bal_left}
                                            onChange={(e) => handleMFLumpSumBalLeftChange(0, e.target.value)}
                                        />
                                    </div>
                                </div>
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
                        )}
                    </div>
                </div>

                {/* Any Insurance  */}
                <div>
                    <div className="form-group col">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="showInsuranceDiv"
                            onChange={handleInsuranceCheckbox}
                        />
                        <label className="form-label fs-4 fw-bold" htmlFor="showInsuranceDiv">Current Insurance</label>

                        {showInsurance && (
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
                        )}
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
                    <div className="d-flex align-items-center">
                        <CheckboxGroup inline name="checkboxList">
                            <Checkbox
                                // className="checkbox"
                                // style={{borderColor: "red"}}
                                value="Stocks"
                                name="stock_hold"
                                checked={stocks_on_hold}
                                onChange={() => handleCheckboxChange('Stocks')}
                            >
                                Add to stock waiting list
                            </Checkbox>
                            <Checkbox
                                // className="checkbox"
                                value="MF"
                                name="mf_hold"
                                checked={MF_on_hold}
                                onChange={() => handleCheckboxChange('MF')}
                            >
                                Add to mutual funds waiting list
                            </Checkbox>
                            <Checkbox
                                value="family"
                                name="family_name"
                                checked={!!showFamilyList}
                                onChange={handleFamilyChange}
                            >
                                Add To Family Members
                            </Checkbox>

                            {showFamilyList && (
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-row align-items-center">
                                        <label className="d-flex align-items-center">Select family: </label>
                                        <div>
                                            <select className="form-select" value={selectedFamilyMember} onChange={handleFamilyMemberChange}>
                                                <option value="">Select a family member</option>
                                                {familyMembersList.map((member) => (
                                                    <option key={member.id} value={member.name}>
                                                        {member.name}
                                                    </option>
                                                ))}
                                                {/* <option value="Other">Other</option> */}
                                            </select>
                                        </div>
                                        {selectedFamilyMember === "Other" && (
                                            <div>
                                                <label className="d-flex align-items-center">Add new family :</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={newFamilyMember}
                                                    onChange={handleNewFamilyMemberChange}
                                                />
                                                <button onClick={handleAddFamilyMember}>Add</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                        </CheckboxGroup>
                    </div>
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
