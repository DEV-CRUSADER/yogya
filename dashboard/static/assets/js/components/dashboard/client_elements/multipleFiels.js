import React from "react";


//Existing Invesments In
export function InvesmentsMultiple({ inputFields, setInputFields, type }) {

    const addInputField = (e) => {
        e.preventDefault()
        setInputFields([
            ...inputFields,
            {
                investment_date: "",
                scheme_name: "",
                share_quantity: "",
                fixed_deposit: "",
                debt_quantity: "",
                debt_yield: "",
                invested_amount: "",
                market_value: "",
                portfolio: "",
            },
        ]);
    };
    const removeInputFields = (index) => {

        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    };
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        let formattedValue = value;
        if (name === 'investment_date') {
            // Format the date to yyyy-mm-dd
            const dateObject = new Date(value);
            const year = dateObject.getFullYear();
            let month = (1 + dateObject.getMonth()).toString().padStart(2, '0');
            let day = dateObject.getDate().toString().padStart(2, '0');
            formattedValue = `${year}-${month}-${day}`;
        }
        const list = [...inputFields];
        list[index][name] = formattedValue;
        setInputFields(list);
        // console.log("Current state:", inputFields);
    };
    return (
        <div className="d-flex justify-content-center align-items-end">
            <table className="w-100">
                <thead>
                    <tr>
                        <th className="px-1"
                            style={{
                                width: "80px"
                            }}
                        >Date
                        </th>

                        <th className="px-1"
                        >Name
                        </th>

                        {(type === "stock") && (<th className="px-1" style={{ width: "150px" }}>No. of shares</th>)}
                        {(type === "fixed_deposit") && (<th className="px-1" style={{ width: "150px" }}>Fixed Deposite</th>)}
                        {(type === "debt_quantity") && (<th className="px-1" style={{ width: "150px" }}>Debt Amount</th>)}
                        <th className="px-1"
                            style={{
                                width: "150px"
                            }}
                        >Invested Amount (&#8377;)
                        </th>

                        <th className="px-1"
                            style={{
                                width: "150px"
                            }}
                        >Market Value (&#8377;)
                        </th>

                        <th className="px-1" style={{ width: "113px" }}>
                            {(type === "debt_quantity") && ("Yield")}
                            {(type !== "debt_quantity") && ("Portfolio (%)")}

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {inputFields.map((data, index) => {
                        const { investment_date, scheme_name, share_quantity, fixed_deposit, debt_quantity, invested_amount, market_value, debt_yield, portfolio } = data;
                        return (
                            <tr className="my-2" key={index}>
                                <th className="px-1 pb-1">
                                    <input
                                        type="date"
                                        onChange={(event) => handleChange(index, event)}
                                        value={investment_date || ''} // Providing empty string as fallback value
                                        name="investment_date"
                                        className="form-control"
                                        placeholder="Date"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(event) => handleChange(index, event)}
                                        value={scheme_name}
                                        name="scheme_name"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </th>
                                {(type == "stock") && (
                                    <th className="px-1 pb-1 align-items-end">
                                        <input
                                            type="number"
                                            onChange={(event) => handleChange(index, event)}
                                            value={share_quantity}
                                            name="share_quantity"
                                            className="form-control"
                                            placeholder="Quantity"
                                        />
                                    </th>
                                )}
                                {(type == "fixed_deposit") && (
                                    <th className="px-1 pb-1 align-items-end">
                                        <input
                                            type="number"
                                            onChange={(event) => handleChange(index, event)}
                                            value={fixed_deposit}
                                            name="fixed_deposit"
                                            className="form-control"
                                            placeholder="Amount"
                                        />
                                    </th>
                                )}
                                {(type == "debt_quantity") && (
                                    <th className="px-1 pb-1 align-items-end">
                                        <input
                                            type="number"
                                            onChange={(event) => handleChange(index, event)}
                                            value={debt_quantity}
                                            name="debt_quantity"
                                            className="form-control"
                                            placeholder="Debt Quantity"
                                        />
                                    </th>
                                )}
                                <th className="px-1 pb-1">
                                    <input
                                        type="number"
                                        onChange={(event) => handleChange(index, event)}
                                        value={invested_amount}
                                        name="invested_amount"
                                        className="form-control"
                                        placeholder="Invested Amount"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="number"
                                        onChange={(event) => handleChange(index, event)}
                                        value={market_value}
                                        name="market_value"
                                        className="form-control"
                                        placeholder="Market Value"
                                    />
                                </th>

                                <th className="px-1 pb-1 align-items-end">
                                    {(type === "debt_quantity") && (
                                        <input
                                            type="number"
                                            onChange={(event) => handleChange(index, event)}
                                            value={debt_yield}
                                            name="debt_yield"
                                            className="form-control"
                                            placeholder="Debt Yield"
                                        />
                                    )}
                                    {(type !== "debt_quantity") && (
                                        <input
                                            type="number"
                                            onChange={(event) => handleChange(index, event)}
                                            value={portfolio}
                                            name="portfolio"
                                            className="form-control"
                                            placeholder="Type.."
                                        />
                                    )}
                                </th>
                                {inputFields.length !== 1 && (
                                    <th className="px-1 pb-1"
                                        style={{
                                            width: "50px"
                                        }}
                                    >
                                        <button
                                            className="btn btn-danger"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                removeInputFields(index)
                                            }
                                            }
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </th>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <button
                    className="btn btn-success mb-1"
                    onClick={addInputField}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
}


// Current Insurance Of Yours OR Family Dependents
export function Insurance({ inputFields, setInputFields }) {

    const addInputField = (e) => {
        e.preventDefault()
        setInputFields([
            ...inputFields,
            {
                company_name: "",
                scheme_name: "",
                scheme_type: "",
                annual_premium: "",
                sum_assured: "",
            },
        ]);
    };
    const removeInputFields = (index) => {

        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
        // quantity(quantity)
    };
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    };
    return (
        <div className="d-flex justify-content-center align-items-end">
            <table className="w-100">
                <thead>
                    <tr>
                        <th className="px-1"
                            style={{
                                width: "200px"
                            }}
                        >Company name</th>
                        <th className="px-1"
                        >Scheme Name</th>
                        <th className="px-1"
                            style={{
                                width: "150px"
                            }}
                        >Scheme Type</th>
                        <th className="px-1"
                            style={{
                                width: "100px"
                            }}
                        >Annual Premium</th>
                        <th className="px-1"
                            style={{
                                width: "100px"
                            }}
                        >Sum Assured</th>
                    </tr>
                </thead>
                <tbody>
                    {inputFields.map((data, index) => {
                        const { company_name, scheme_name, scheme_type, annual_premium, sum_assured } = data;
                        return (
                            <tr className="my-2" key={index}>
                                {/* <th className="px-1 pb-1">
                                    <input
                                        type="date"
                                        onChange={(event) => handleChange(index, event)}
                                        value={date}
                                        name="date"
                                        className="form-control"
                                        placeholder="Date"
                                    />
                                </th> */}
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(event) => handleChange(index, event)}
                                        value={company_name}
                                        name="company_name"
                                        className="form-control"
                                        placeholder="Company name"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(event) => handleChange(index, event)}
                                        value={scheme_name}
                                        name="scheme_name"
                                        className="form-control"
                                        placeholder="Scheme name"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="number"
                                        onChange={(event) => handleChange(index, event)}
                                        value={scheme_type}
                                        name="scheme_type"
                                        className="form-control"
                                        placeholder="Amount"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="number"
                                        onChange={(event) => handleChange(index, event)}
                                        value={annual_premium}
                                        name="annual_premium"
                                        className="form-control"
                                        placeholder="Type.."
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="number"
                                        onChange={(event) => handleChange(index, event)}
                                        value={sum_assured}
                                        name="sum_assured"
                                        className="form-control"
                                        placeholder="Type.."
                                    />
                                </th>
                                {inputFields.length !== 1 && (
                                    <th className="px-1 pb-1"
                                        style={{
                                            width: "50px"
                                        }}
                                    >
                                        <button
                                            className="btn btn-danger"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                removeInputFields(index)
                                            }
                                            }
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </th>
                                )}
                            </tr>
                        );
                    })}

                </tbody>
            </table>
            <div>
                <button
                    className="btn btn-success mb-1"
                    onClick={addInputField}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
}

// Any Loan
export function AnyLoan({ inputFields, setInputFields }) {

    const addInputField = (e) => {
        e.preventDefault()
        setInputFields([
            ...inputFields,
            {
                loan_type: "",
                amount: "",
            },
        ]);
    };
    const removeInputFields = (index) => {
        const updatedInputFields = [...inputFields];
        updatedInputFields.splice(index, 1);
        setInputFields(updatedInputFields);
    };
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedInputFields = [...inputFields];
        updatedInputFields[index][name] = value;
        setInputFields(updatedInputFields);
    };
    return (
        <div className="d-flex justify-content-center align-items-end">
            <table className="w-100">
                <thead>
                    <tr>
                        <th className="px-1 pb-1"
                            style={{
                                width: "50%"
                            }}
                        >Choose the loan scheme</th>
                        <th className="px-1 pb-1"
                            style={{
                                width: "100%"
                            }}
                        >Amount(&#8377;)</th>
                    </tr>
                </thead>
                <tbody>
                    {inputFields.map((data, index) => {
                        const { loan_type, amount } = data;
                        return (
                            <tr className="my-2" key={index}>
                                <th className="px-1 pb-1">
                                    <select
                                        className="form-select"
                                        name="loan_type"
                                        onChange={(event) => handleChange(index, event)}
                                        value={loan_type}
                                    >
                                        <option value="None">None</option>
                                        <option value="home">Home</option>
                                        <option value="property">Property</option>
                                        <option value="creditCard">Credit Card</option>
                                        <option value="llc">LLC</option>
                                        <option value="education">Education</option>
                                    </select>
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="number"
                                        onChange={(event) => handleChange(index, event)}
                                        value={amount}
                                        name="amount"
                                        className="form-control"
                                        placeholder="Amount"
                                    />
                                </th>
                                {inputFields.length !== 1 && (
                                    <th className="px-1 pb-1"
                                        style={{
                                            width: "50px"
                                        }}
                                    >
                                        <button
                                            className="btn btn-danger"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                removeInputFields(index)
                                            }
                                            }
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </th>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <button
                    className="btn btn-success mb-1"
                    onClick={addInputField}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
}



// {/* Current Emergency Funds-Cover */}
export function EmergencyFund({ emergency_input_value, emergencyFundAddress, onChange }) {
    const handleShowDetailsChange = (e) => {
        const { value } = e.target;
        onChange("emergency_input_value", value);
        // Clear address when showDetails is set to 'no'
        if (value === 'no') {
            onChange("address", ""); // Clear address
        }
    };

    const handleAddressChange = (e) => {
        onChange("address", e.target.value);
    };

    return (
        <div className="form-group mt-3">
            <label className="form-label fs-5 fw-bold w-150">
                Current Emergency Funds-Cover 6-Months Of Expense Or Not ?
            </label>
            <div className="col-md-12">
                <div className="text-dark">
                    <input
                        className=""
                        type="radio"
                        name="user_input_yes"
                        value="yes"
                        checked={emergency_input_value === 'yes'}
                        onChange={handleShowDetailsChange}
                    />
                    Yes
                    <input
                        className="ms-3"
                        type="radio"
                        name="user_input_no"
                        value="no"
                        checked={emergency_input_value === 'no'}
                        onChange={handleShowDetailsChange}
                    />
                    No
                </div>
            </div>

            {emergency_input_value === 'yes' && (
                <div className='col-md-12'>
                    <label className="form-label"> Address</label>
                    <div className="text-white">
                        <input 
                            className='form-control fs-5'
                            type="text" 
                            name='address' 
                            placeholder="Enter Address"
                            value={emergencyFundAddress}
                            onChange={handleAddressChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}