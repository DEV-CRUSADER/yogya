import React from "react";
import { BrowserRouter as BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';

// importing extra css
import "../../../../../css/navbar.css";



function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            background: "#000",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="container-fluid p-2 px-4">
            <Link className="nav-brand" to="/"> Yogya </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/"> Home </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/resources"> Resources </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/"> Mutual Funds </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/"> Contact Us </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-but">
                  <a className="nav-link" href="#">Sign up</a>
                </li>
                <li className="nav-but">
                  <a className="nav-link" href="#">login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
}
export default Navbar;
