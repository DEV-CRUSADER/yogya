import React from "react";
import { Sidebar, Sidenav, Navbar, Nav } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import FunnelTimeIcon from '@rsuite/icons/FunnelTime';
import { ChartsIndexFrom } from "./form";
import "../../../../../../css/core/sidebar.css";

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: "var(--teritary-color)",
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};



export function ResourcesSidebar({ expand, setExpand, 
    setDataFound, setIndexName, setLabels, setChartData, }) {
    return (
        <Sidebar
            style={{
                display: "flex",
                flexDirection: "column",
            }}
            id="sidBar"
            width={expand ? 260 : 56}
            collapsible
        >
            <Sidenav.Header>
                <div style={headerStyles}>
                    <span id="headerMob" style={{ marginLeft: 12 }}>Charts</span>
                    <span id="headerDiv" style={{ marginLeft: 12 }}>P/E, P/B and divYield</span>
                </div>
            </Sidenav.Header>
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                    <Nav>
                        <Nav.Menu
                            eventKey="3"
                            trigger="hover"
                            title="Charts"
                            icon={<FunnelTimeIcon />}
                            placement="rightStart"
                        >
                            <Nav.Item eventKey="3-1" >
                                <ChartsIndexFrom 
                                    setChartData={setChartData}
                                    setLabels={setLabels}
                                    setDataFound={setDataFound}
                                    setIndexName={setIndexName}
                                />
                            </Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
};


export function TopBar({ setDataFound, setIndexName, setLabels, setChartData, }){
    return (
        <div
            className="m-0 p-5 d-flex justify-content-center align-items-center"
            style={{
                background: "var(--secondary-color)"
            }}
        >
            <ChartsIndexFrom
                setChartData={setChartData}
                setLabels={setLabels}
                setDataFound={setDataFound}
                setIndexName={setIndexName}
            />
        </div>
    )
}