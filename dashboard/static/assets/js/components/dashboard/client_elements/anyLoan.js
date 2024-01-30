import { useState } from "react";

function AnyLoan() {
    const [inputFields, setInputFields] = useState([
        {
            companyName: "",
            schemeName: "",
        },
    ]);

    const addInputField = () => {
        setInputFields([
            ...inputFields,
            {
                companyName: "",
                schemeName: "",
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
        <>
            <table>
                {inputFields.map((data, index) => {
                    const { anyLoan, schemeName } = data;
                    return (
                        <tbody key={index}>
                            <tr>
                                <th className="col-2">
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
                                <th className="col-2">
                                    <input
                                        type="Text here"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={schemeName}
                                        name="schemeName"
                                        className="form-control"
                                        placeholder="Amount"
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th className="col">
                                    {inputFields.length !== 1 ? (
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={removeInputFields}
                                        >
                                            Remove
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                </th>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <div>
                <button
                    className="btn btn-outline-success "
                    onClick={addInputField}
                >
                    Add New
                </button>
            </div>
        </>
    );
}
export default AnyLoan;
