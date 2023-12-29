import React from "react";
import { data } from "./const"
import { SideBar } from "../../../../../../css/core/sideBar.css";


export function Sidebar() {


  return (
    <div id="wrapper">
      
      {/* <!-- Sidebar --> */}
      <div id="sidebar-wrapper" style={{
        display: "flex",
        flexDirection: "column",

      }}>
        <div className="row"><h5 className="column mt-3 text-dark" style={{ textAlign: "center" }}>Historical Data Report</h5></div>
        <h4 className="text-light" style={{
          marginTop: "25%",
          marginLeft: "5px"
        }}>Select an Index Type</h4>
        <select
          className="form-control"
          aria-label="Default select example"
          style={{
            marginTop: "3%",
          }}
        >
          {data.map((symbol, index) => (
            <option key={index} value={symbol.Trading_Index_Name} style={{ maxWidth: "250px", }}>{symbol.Trading_Index_Name}</option>
          ))}

        </select>
      </div>
      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <a href="#" className="btn" id="menu-toggle"><span className="hamburger">Menu</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
