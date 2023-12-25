import React, { useState } from "react";


export function Sidebar() {


    // TODO: Add sidebar
    document.body.style.overflowY = "hidden";

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "95vh",
                width: "350px",
                background: "var(--secondary-color)",
            }}
        >   
            SIDE BAR
        </div>
    );
};
