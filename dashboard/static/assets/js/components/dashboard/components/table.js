import React, { useState, useEffect } from "react";
import { SideBar } from './sideBar';

const generateDummyData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            id: i + 1,
            fullName: `Full Name ${i + 1}`,
            phone_no: `Phone Number ${i + 1}`,
            email: `email${i + 1}@example.com`,
            pancard: `Pan Card ${i + 1}`,
        });
    }
    return data;
};

export function TableView({ expanded }) {
    const [limit, setLimit] = useState(30);
    const [page, setPage] = useState(1);
    const [tableData, setTableData] = useState(generateDummyData(100));
    const [searchTerm, setSearchTerm] = useState('');
    const [editedData, setEditedData] = useState(null);

    const handleRemove = rowData => {
        const updatedData = tableData.filter(item => item.id !== rowData.id);
        setTableData(updatedData);
    };

    const handleInputChange = (e, field) => {
        const { value } = e.target;
        setEditedData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const saveEditedData = () => {
        if (!editedData) return;
        const newData = tableData.map(item => {
            if (item.id === editedData.id) {
                return editedData;
            }
            return item;
        });
        setTableData(newData);
        setEditedData(null);
    };

    const handleEdit = (rowData) => {
        setEditedData({ ...rowData });
    };

    const tableWidth = expanded ? '100%' : '80%';

    const filteredData = tableData.filter(item =>
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.pancard.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredData.length / limit);

    return (
        <div
            style={{
                boxShadow: 'rgba(0, 0, 0, 0.56) 0px 15px 70px 3px',
                borderRadius: '10px',
            }}
        >
            {/* Search bar */}
            <div className="input-group">
                <span className="input-group-text" id="basic-addon2">
                    <button className="bi bi-search pe-auto"></button>
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for clients...."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ borderRadius: '0px 7px 7px 0px' }}
                />
                <div className="input-group-append">

                </div>
            </div>

            {/* Table */}
            <div
                className="table-container"
                style={{
                    maxHeight: '768px',
                    overflowY: 'auto',
                    width: tableWidth,
                }}
            >
                <table className="table table-striped" style={{ width: '100%' }}>
                    {/* Table headers */}
                    <thead>
                        <tr className="position-sticky">
                            <th scope="col" style={{ backgroundColor: "#104ccc" }} className="text-light">Id</th>
                            <th scope="col" style={{ backgroundColor: "#104ccc" }} className="text-light">Full Name</th>
                            <th scope="col" style={{ backgroundColor: "#104ccc" }} className="text-light">Phone Number</th>
                            <th scope="col" style={{ backgroundColor: "#104ccc" }} className="text-light">Email</th>
                            <th scope="col" style={{ backgroundColor: "#104ccc" }} className="text-light">Pan Card</th>
                            <th scope="col" style={{ backgroundColor: "#104ccc" }} className="text-light">Actions</th>
                            <th scope="col" style={{ backgroundColor: "#104ccc" }} className="text-light">More</th>
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {filteredData.slice((page - 1) * limit, page * limit).map((rowData) => (
                            <tr key={rowData.id}>
                                <td>{rowData.id}</td>
                                <td>{editedData && editedData.id === rowData.id ? <input value={editedData.fullName} onChange={(e) => handleInputChange(e, 'fullName')} /> : rowData.fullName}</td>
                                <td>{editedData && editedData.id === rowData.id ? <input value={editedData.phone_no} onChange={(e) => handleInputChange(e, 'phone_no')} /> : rowData.phone_no}</td>
                                <td>{editedData && editedData.id === rowData.id ? <input value={editedData.email} onChange={(e) => handleInputChange(e, 'email')} /> : rowData.email}</td>
                                <td>{editedData && editedData.id === rowData.id ? <input value={editedData.pancard} onChange={(e) => handleInputChange(e, 'pancard')} /> : rowData.pancard}</td>
                                <td>
                                    {editedData && editedData.id === rowData.id ? (
                                        <button className="btn text-light me-1" style={{ backgroundColor: "#f0ad4e" }} onClick={saveEditedData}>Save</button>
                                    ) : (
                                        <button className="btn text-light me-1" style={{ backgroundColor: "#34b45c" }} onClick={() => handleEdit(rowData)}>Edit</button>
                                    )}
                                    <button onClick={() => handleRemove(rowData)} className="btn btn-danger">Remove</button>
                                </td>
                                <td className="">
                                    <div
                                        className="dropdown "
                                        style={{
                                            maxWidth: "4vw"
                                        }}
                                    >
                                        <button
                                            className="bi bi-three-dots ms-2 ps-2 pe-2 p-2 text-light"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{
                                                backgroundColor: "#34b45c",
                                                borderRadius: "5px",
                                            }}
                                        >
                                        </button>
                                        <ul className="dropdown-menu pe-auto">
                                            <li>
                                                <span className="dropdown-item">
                                                    <i className="fas fa-pen mx-2"></i> Add to family
                                                </span>
                                            </li>
                                            <li>
                                                <span className="dropdown-item">
                                                    <i className="fas fa-trash mx-2"></i> Block
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                {/* Pagination */}
                <div style={{ padding: '15px' }}>
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
                            <li className={`page-item ${page === totalPages || totalPages === 0 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
