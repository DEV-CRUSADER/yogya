import { useState } from "react";

function Insurance() {
    const [inputFields, setInputFields] = useState([
        {
            companyName: "",
            schemeName: "",
            schemeType: "",
            premium: "",
            assured:"",
        },
    ]);

    const addInputField = () => {
        setInputFields([
            ...inputFields,
            {
                companyName: "",
                schemeName: "",
                schemeType: "",
                premium: "",
                assured:"",
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
                <thead>
                    <tr>
                        <th scope="col">Company name</th>
                        <th scope="col">Scheme Name</th>
                        <th scope="col">Scheme Type</th>
                        <th scope="col">Annual Premium</th>
                        <th scope="col">Sum Assured</th>
                    </tr>
                </thead>

                {inputFields.map((data, index) => {
                    const { companyName, schemeName, schemeType, premium, assured } = data;
                    return (
                        <tbody key={index}>
                            <tr>
                                <th>
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={companyName}
                                        name="companyName"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </th>

                                <th className="col">
                                    <input
                                        type="email"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={schemeName}
                                        name="schemeName"
                                        className="form-control"
                                        placeholder="Scheme3"
                                    />
                                </th>
                                <th className="col">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={schemeType}
                                        name="schemeType"
                                        className="form-control"
                                        placeholder="Amount"
                                    />
                                </th>
                                <th className="col">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={premium}
                                        name="premium"
                                        className="form-control"
                                        placeholder="Annual Premium"
                                    />
                                </th>
                                <th className="col">
                                    <input
                                        type="text"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={assured}
                                        name="assured"
                                        className="form-control"
                                        placeholder="Sum Assured"
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
export default Insurance;
