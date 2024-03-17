import React from "react";


export function NavBar() {
    return (
        <>
            <div
                className='d-flex justify-content-between align-items-center bg-light p-2'
                style={{
                    width: '97%',
                    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 50px -15px',
                    marginLeft: '3%',
                }}
            >
                <div className='d-flex align-items-center justify-content-center flex-grow-1'> {/* Using flex-grow-1 to make sure the Dashboard text is centered */}
                    <h4 className='m-0 bi bi-currency-dollar'> Yogya Capital</h4>
                </div>
                <div className='d-flex align-items-center'>
                    <i className='bi bi-bell fs-4 me-3'></i>
                    <i className='bi bi-person fs-4 me-3'></i>
                </div>
            </div>
        </>
    );
}