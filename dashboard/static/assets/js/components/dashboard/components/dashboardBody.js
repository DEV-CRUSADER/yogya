import React, { useState } from "react";
import {TableView} from './table';



export function DashboardBody() {
    return (
        <>
            <div className="dashboard-body">
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <h5 className=" ms-3">Breadcrum Left</h5>
                    </div>
                    <div>
                        <div className="me-3">
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
                <hr
                    style={{
                        borderColor: 'black',
                        // width: '100%',
                    }}
                />
            </div>
            <div className="ms-3 me-3">
                <TableView />
            </div>
        </>
    );
}

