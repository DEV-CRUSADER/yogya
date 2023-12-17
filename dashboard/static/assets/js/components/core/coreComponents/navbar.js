import React from "react";
import { BrowserRouter as BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';

// importing extra css
import "../../../../../css/navbar.css";


function Navbar(props) {

  const nav_links = [
    {
      to: "/",
      label: "Home"
    },
    {
      to: "/resources",
      label: "Resources"
    },
    {
      to: "/",
      label: "Mutual Funds"
    },
    {
      to: "/",
      label: "Contact Us"
    }
  ]


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            background: "#000",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="container-fluid p-2 px-4">
            <Link className="navbar-brand" to="/"> Yogya </Link>
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
                {
                  nav_links.map(link => (
                    <Link key={link.to} className="nav-link" to={link.to}>
                      {link.label}
                    </Link>
                  ))
                }
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
