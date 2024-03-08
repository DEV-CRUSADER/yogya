import React from "react";
import { Link } from "react-router-dom";

export function Logo() {
    return (
        <Link
            className="d-flex flex-column justify-content-center p-2 text-white text-decoration-none"
            to="/"
            style={{
                fontFamily: "DelicateSans",
            }}
        >
            <span style={{
                fontSize: "2rem",
            }}>Yogya</span>
            <span style={{
                fontSize: "1.7rem",
                marginTop: "-10px",
            }}>Capital</span>
        </Link>
    );
}