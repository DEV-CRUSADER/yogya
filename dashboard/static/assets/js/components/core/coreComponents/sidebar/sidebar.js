import React, { useState } from "react";
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';


export function Sidebar() {


  // TODO: Add sidebar
  document.body.style.overflowY = "hidden";
  const headerStyles = {
    padding: 20,
    width: "350px",
    fontSize: 20,
    background: '#34c3ff',
    color: ' #fff',
  };

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

      <Sidenav className="">
        <Sidenav.Header>
          <div style={headerStyles}>Custom Sidenav</div>
        </Sidenav.Header>
        <Sidenav.Body className="d-flex">
          <Nav>
            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>



    </div>
  );
};
