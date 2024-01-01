import React from "react";
import "./App.css";
import { useState } from "react";

export function ClientData() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: [""],
    currentOccupation: "",
    monthlySalary: "",
    currentKnowledge: "",
    anyGoals: "",
    riskBalance: [""],
    exintingInvesment: [""],
  });

  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "riskBalance") {
      let copy = { ...formData };

      // if (event.target.checked) {
      //   copy.riskBalance.push(event.target.value)
      // } else {
      //   copy.riskBalance = copy.riskBalance.filter(el => el !== event.target.value)
      // }
      setFormData(copy);
      if (event.target.name === "exintingInvesment") {
        let copy = { ...formData };
        setFormData(copy);
      }
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <h2>Client Forms</h2>
      <form onSubmit={onSubmitHandler}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            className="form-control"
            name="fullName"
            onChange={onChangeHandler}
            value={formData.username}
            placeholder="Full Name"
          />
        </div>
        {/* Age */}
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <select
            className="form-select"
            name="age"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="18-25">18-25</option>
            <option value="26-40">26-40</option>
            <option value="41-55">41-55</option>
            <option value="56+">56 & Above</option>
          </select>
        </div>

        {/* Occupations */}
        <div className="form-group">
          <label htmlFor="currentOccupation" className="form-label">
            Current Occupation
          </label>
          <select
            className="form-select"
            name="currentOccupation"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="Salaried">Salaried</option>
            <option value="Slef-Employed">Slef-Employed</option>
            <option value="Retired">Retired</option>
          </select>
        </div>
        {/* Monthly Salary */}

        <div className="form-group">
          <label htmlFor="monthlySalary" className="form-label">
            Monthly Salary
          </label>
          <input
            className="form-control"
            name="monthlySalary"
            onChange={onChangeHandler}
            value={formData.username}
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
            name="currentKnowledge"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="None">None</option>
            <option value="Intermediate">Intermediate</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Any goals */}
        <div className="form-group">
          <label htmlFor="anyGoals" className="form-label">
            Any Specific Goals In Mind
          </label>
          <input
            className="form-control"
            name="anyGoals"
            onChange={onChangeHandler}
            value={formData.username}
            placeholder="Your Golas"
          />
        </div>

        {/* Risk Balance */}

        <div className="form-group">
          <label htmlFor="riskBalance" className="form-label">
            Risk Balance
          </label>
          <select
            className="form-select"
            name="riskBalance"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="low">Low (5-15%)</option>
            <option value="medium">Medium (15-30%)</option>
            <option value="high">High (30-50%)</option>
          </select>
        </div>

        {/* Existing Invesment */}

        <div className="form-group">
          <label htmlFor="exintingInvesment" className="form-label">
            Existing Invesments In
          </label>
          <select
            className="form-select"
            name="exintingInvesment"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="stocks">Stocks</option>
            <option value="mf">Mutual Funds (MF)</option>
            <option value="fd">Fixed Deposite (FD)</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Any Loans  */}
        <div className="form-group">
          <label htmlFor="anyLoan" className="form-label">
            Any Loan On{" "}
          </label>
          <select
            className="form-select"
            name="anyLoan"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="None">None</option>
            <option value="home">Home</option>
            <option value="property">Property</option>
            <option value="creditCard">Credit Card</option>
            <option value="llc">LLC</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* Any Insurance  */}
        <div className="form-group">
          <label htmlFor="currentInsurance" className="form-label">
            Current Insurance Of Yours OR Family Dependents{" "}
          </label>
          <select
            className="form-select"
            name="currentInsurance"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="healthInsurance">Health Insurance</option>
            <option value="termInsurance">Term Insurance</option>
          </select>
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
          </div>
        </div>

        {/* Tax Brackets of Clients */}

        {/* How Can We Improve Ourselves */}
        <div className="form-group">
          <label htmlFor="improve" className="form-label">
            How Can We Improve Ourselves
          </label>
          <input
            className="form-control"
            name="improve"
            onChange={onChangeHandler}
            value={formData.email}
            placeholder="Your Suggestions"
          />
        </div>

        <div className="form-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientData;
