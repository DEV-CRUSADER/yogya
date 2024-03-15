import React from "react";

export function NavBar() {
    return (
        <>
        <div className='d-flex justify-content-between align-items-center bg-light p-2 w-100'>
            <div className='d-flex align-items-center justify-content-center'>
                <h4 className='m-0'>Dashboard</h4>
            </div>
            <div className='d-flex align-items-center'>
                <i className='bi bi-bell fs-4 me-3'></i>
                <i className='bi bi-person fs-4 me-3'></i>
            </div>
        </div>
        </>
    );
}