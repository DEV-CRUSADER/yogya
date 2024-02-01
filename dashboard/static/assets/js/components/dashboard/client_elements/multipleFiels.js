import React from "react";


//Existing Invesments In
export function InvesmentsMultiple({ inputFields, setInputFields }) {

    const addInputField = (e) => {
        e.preventDefault()
        setInputFields([
            ...inputFields,
            {
                date: "",
                scheme_name: "",
                amount: "",
                portfolio: "",
            },
        ]);
    };
    const removeInputFields = (index) => {
        
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    };
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
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
                                width: "80px"
                            }}
                        >Date</th>
                        <th className="px-1">Name</th>
                        <th className="px-1"
                            style={{
                                width: "150px"
                            }}
                        >Amount (&#8377;)</th>
                        <th className="px-1"
                            style={{
                                width: "100px"
                            }}
                        >Portfolio (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {inputFields.map((data, index) => {
                        const { date, scheme_name, amount, portfolio } = data;
                        return (
                            <tr className="my-2" key={index}>
                                <th className="px-1 pb-1">
                                    <input
                                        type="date"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={date}
                                        name="date"
                                        className="form-control"
                                        placeholder="Date"
                                    />
                                </th>

                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={scheme_name}
                                        name="scheme_name"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={amount}
                                        name="amount"
                                        className="form-control"
                                        placeholder="Amount"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={portfolio}
                                        name="portfolio"
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
                    className="btn btn-success"
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
                sum_assured:"",
            },
        ]);
    };
    const removeInputFields = (index) => {
        
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    };
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
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
                        const { company_name, scheme_name, scheme_type, annual_premium, sum_assured} = data;
                        return (
                            <tr className="my-2" key={index}>
                                {/* <th className="px-1 pb-1">
                                    <input
                                        type="date"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={date}
                                        name="date"
                                        className="form-control"
                                        placeholder="Date"
                                    />
                                </th> */}
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={company_name}
                                        name="company_name"
                                        className="form-control"
                                        placeholder="Company name"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={scheme_name}
                                        name="scheme_name"
                                        className="form-control"
                                        placeholder="Scheme name"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={scheme_type}
                                        name="scheme_type"
                                        className="form-control"
                                        placeholder="Amount"
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={annual_premium}
                                        name="annual_premium"
                                        className="form-control"
                                        placeholder="Type.."
                                    />
                                </th>
                                <th className="px-1 pb-1">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
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
                    className="btn btn-success"
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
                loan: "",
            },
        ]);
    };
    const removeInputFields = (index) => {
        
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    };
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
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
                                width: "300px"
                            }}
                        >Choose the loan scheme</th>
                        <th className="px-1"
                            style={{
                                width: "200px"
                            }}
                        >Amount(&#8377;)</th>
                        </tr>
                </thead>
                <tbody>
                    {inputFields.map((data, index) => {
                        const { loan, anyLoan} = data;
                        return (
                            <tr className="my-2" key={index}>
                                <th className="px-1 pb-1">
                                <select
                                        className="form-select"
                                        name="anyLoan"
                                        // onChange={onChangeHandler}
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={anyLoan}
                                        
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
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={loan}
                                        name="loan"
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
                    className="btn btn-success"
                    onClick={addInputField}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
}



// {/* Current Emergency Funds-Cover */}
function Defaulthideshow()
{
  const [showhide, setShowhide]= useState("no");

const handleshow= e=>{
  const getshow= e.target.value;
  setShowhide(getshow);
}
return(<React.Fragment>

<div className="form-group">
                    <label  className="form-label">
                        Current Emergency Funds-Cover 6-Months Of Expence Or Not ?
                    </label>
                    <div className="col-md-12">
                    <label  className="form-label"> Show Details</label>            
                    <div className="text-white"> 
                      Yes <input type="radio" name="userdetail" value="yes" onClick={ handleshow } /> 
                      No <input type="radio" name="userdetail" value="no" checked={ showhide==='no' } onClick={ handleshow }/> 
                    </div>
                    </div>

                    {
                    showhide==='yes' && (
                    <div className='col-md-12'>
                     <label  className="form-label"> Address</label>            
                    <div className="text-white"> 
                     <input type="text" name='address' className='form-control'/>                                                 
                    </div>
                    </div>
                    )}
                    </div>
                    
                    </React.Fragment>);
}
export default Defaulthideshow;
