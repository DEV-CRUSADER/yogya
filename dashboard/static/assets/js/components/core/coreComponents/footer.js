import React from "react";
import {
  BrowserRouter as BrowserRouter,
  HashRouter,
  Route,
  Link,
} from "react-router-dom";

// Icons
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

import { CSS } from "../../../../../css/footer.css";

export function Footer() {
  return (
    <div className="section">
      <div className="container-fluid p-0"
        style={{
          color: "var(--main-color)"
        }}
      >
        <div className="d-flex justify-content-center">
          <Link className="m-2"><FaInstagram className="fs-4 p-2 rounded-circle" 
            style={{
              background: "var(--main-color)",
              width: "35px",
              height: "35px",
              fill: "var(--secondary-color)",
            }}
          /></Link>
          <Link className="m-2"><FaLinkedinIn className="fs-4 p-2 rounded-circle" 
            style={{
              background: "var(--main-color)",
              width: "35px",
              height: "35px",
              fill: "var(--secondary-color)",
            }}/></Link>
          <Link className="m-2"><FaFacebookF className="fs-4 p-2 rounded-circle" 
            style={{
              background: "var(--main-color)",
              width: "35px",
              height: "35px",
              fill: "var(--secondary-color)",
            }} /></Link>
        </div>
        <div className="text-center">
          <span className="fs-5">2004-2005 Arihant Market, Ring road, Surat, Gujarat</span>
        </div>
        <div className="text-center mt-1 d-flex justify-content-center">
            <div className="pe-1">
              <a>
                <FaPhoneAlt/>
                <span  className="ps-1">
                  +91 00000 00000
                </span>
              </a>
            </div>
            <div className="ps-1">
              <a>
                <FaRegEnvelope/> 
                <span className="ps-1">
                  chirag.jain@yahoo.com
                </span>
              </a>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p>my logo</p>
        </div>
        <div
         className="py-1 d-flex justify-content-around"
          style={{
            background: "var(--teritary-color)",
            
          }}
        >
              <span>www.website.com &copy;&nbsp;copyright, 2023</span>
              <span>Privacy policy | T&C</span>
        </div>
      </div>
    </div>
  );
}
