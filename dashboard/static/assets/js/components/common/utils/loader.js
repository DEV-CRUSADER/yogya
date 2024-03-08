import React from 'react';
import loader from '../../../../img/loader.gif';

export function WebLoader() {
    return (
        <div className="d-flex justify-content-center align-items-center w-100"
            style={{
                height: "100vh",
                background: "rgba(0, 0, 0, 0.6)",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "9999",
            }}
        >
            <img src={loader} alt="Loading..."
                style={{
                    width: "130px",
                    height: "130px",
                }}
            />
        </div>
    );
}