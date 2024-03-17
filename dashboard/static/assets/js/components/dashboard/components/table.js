import React, { useState } from "react";
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const saveEditedData = () => {

        if (!editedData) return; // No data to save

        const newData = tableData.map(item => {
            if (item.id === editedData.id) {
                return editedData;
            }
            return item;
        });
        // Update the state with the new data
        setTableData(newData);
        setEditedData(null); // Reset editedData state
    };

    const handleEdit = (rowData) => {
        setEditedData(rowData);
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
            }}>
            {/* Modal or edit form for editing */}
            {editedData && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setEditedData(null)}>&times;</span>
                        <h2>Edit Data</h2>
                        <div>
                            <label>Full Name:</label>
                            <input type="text" name="fullName" value={editedData.fullName} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Phone Number:</label>
                            <input type="text" name="phone_no" value={editedData.phone_no} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" name="email" value={editedData.email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Pan Card:</label>
                            <input type="text" name="pancard" value={editedData.pancard} onChange={handleInputChange} />
                        </div>
                        <button onClick={saveEditedData}>Save</button>
                    </div>
                </div>
            )}

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
                        </tr>
                    </thead>

                    {/* Table body */}
                    <tbody>
                        {filteredData.slice((page - 1) * limit, page * limit).map((rowData) => (
                            <tr key={rowData.id}>
                                <td>{rowData.id}</td>
                                <td>{rowData.fullName}</td>
                                <td>{rowData.phone_no}</td>
                                <td>{rowData.email}</td>
                                <td>{rowData.pancard}</td>
                                <td>
                                    <button onClick={() => handleEdit(rowData)} className="btn text-light me-1" style={{ backgroundColor: "#34b45c" }}>Edit</button>
                                    <button onClick={() => handleRemove(rowData)} className="btn btn-danger">Remove</button>
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
