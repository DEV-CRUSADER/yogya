import React, { useEffect, useState } from "react";
import { SideBar } from "../../../../../../css/core/sideBar.css";


export function Sidebar() {

  const [values, setValues] = useState([])
  useEffect(() => {
    fetch("https://iislliveblob.niftyindices.com/assets/json/IndexMapping.json?{}&_=1702015000223").then((data) => data.json()).then((val) => setValues(val))
    // method:"GET",
  }, [])
  console.log(values)

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
          className="form-select"
          aria-label="Default select example"
          style={{
            marginTop: "3%",
          }}
        >{
            values.map((Trading_Index_Name, Index_long_name) => <option key={Index_long_name}>{Trading_Index_Name.name}</option>)
          }
          {/* <option value="" disabled>Select...</option>
          {indexOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))} */}
        </select>
      </div>
      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <a href="#" className="btn" id="menu-toggle"><span className="">Menu</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
