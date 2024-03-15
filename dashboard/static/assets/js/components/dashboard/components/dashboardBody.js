import React, { useState } from "react";
import { TableView } from './table';



export function DashboardBody() {

    const [expanded, setExpanded] = useState(true);

    return (
        <>
            <div className="dashboard-body ">
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h4 className="ms-5">List of Clients</h4>
                    <div className="">
                        <div className="me-5">
                            <button
                                className="btn me-3 text-light"
                                style={{
                                    backgroundColor: 'var(--secondary-color)',
                                    // borderColor: 'var(--primary-color)',
                                }}
                            >Primary
                            </button>
                            <button
                                className="btn text-light "
                                style={{
                                    backgroundColor: 'var(--secondary-color)',
                                    // borderColor: 'var(--primary-color)',
                                }}
                            >Add Client
                            </button>
                        </div>
                    </div>
                </div>
                {/* <hr
                    style={{
                        borderColor: 'black',
                        // width: '100%',
                    }}
                /> */}
                <div className="me-5 ms-5 mt-3">
                    <TableView expanded={expanded} />
                </div>
            </div>
        </>
    );
}

