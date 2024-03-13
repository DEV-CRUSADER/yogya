import React, { useState } from "react";
// import './reactSuit.css';



// Function to generate dummy data
const generateDummyData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            id: i + 1,
            firstName: `First Name ${i + 1}`,
            lastName: `Last Name ${i + 1}`,
            city: `City ${i + 1}`,
            email: `email${i + 1}@example.com`
        });
    }
    return data;
};

export function TableView() {
    const [limit, setLimit] = useState(15);
    const [page, setPage] = useState(1);
    const [tableData, setTableData] = useState(generateDummyData(100));

    // const handleChangeLimit = dataKey => {
    //     setPage(1);
    //     setLimit(dataKey);
    // };

    const handleRemove = rowData => {
        const updatedData = tableData.filter(item => item.id !== rowData.id);
        setTableData(updatedData);
    };

    // Filter data based on current page and limit
    const data = tableData.slice((page - 1) * limit, page * limit);
    const totalPages = Math.ceil(tableData.length / limit);

    <style>
        
    </style>

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr className="">
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData) => (
                        <tr key={rowData.id} className={rowData.id % 2 === 0 ? 'table-info' : 'table-success'}>
                            <td>{rowData.id}</td>
                            <td>{rowData.firstName}</td>
                            <td>{rowData.lastName}</td>
                            <td>{rowData.city}</td>
                            <td>{rowData.email}</td>
                            <td>
                                <button
                                    onClick={() => handleRemove(rowData)}
                                    className="btn btn-danger"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ padding: 15 }}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setPage(page - 1)}>Previous</button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setPage(index + 1)}>{index + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
