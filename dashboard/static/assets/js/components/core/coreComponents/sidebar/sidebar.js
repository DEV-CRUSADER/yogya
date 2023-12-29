import React from "react";
import { Sidebar, Sidenav, Navbar, Nav } from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import MagicIcon from '@rsuite/icons/legacy/Magic';

import { ChartsIndexFrom } from "./form"; 

import "../../../../../../css/core/sidebar.css";

import { data } from "./constants";


const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: "var(--teritary-color)",
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};


const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle d-flex d-md-none d-lg-none d-xl-none">
            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};



export function ResourcesSidebar({ expand, setExpand }) {
    return (
        <Sidebar
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            width={expand ? 260 : 56}
            collapsible
        >
            <Sidenav.Header>
                <div style={headerStyles}>
                    <span style={{ marginLeft: 12 }}>P/E, P/B and divYield</span>
                </div>
            </Sidenav.Header>
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                    <Nav>
                        <Nav.Menu
                            eventKey="3"
                            trigger="hover"
                            title="Advanced"
                            icon={<MagicIcon />}
                            placement="rightStart"
                        >
                            <Nav.Item eventKey="3-1">
                                <ChartsIndexFrom />
                            </Nav.Item>
                            {/* <Nav.Item eventKey="3-2">Devices</Nav.Item>
                            <Nav.Item eventKey="3-3">Brand</Nav.Item>
                            <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                            <Nav.Item eventKey="3-5">Visit Depth</Nav.Item> */}
                        </Nav.Menu>
                        {/* <Nav.Menu
                            eventKey="4"
                            trigger="hover"
                            title="Settings"
                            icon={<GearCircleIcon />}
                            placement="rightStart"
                        >
                            <Nav.Item eventKey="4-1">Applications</Nav.Item>
                            <Nav.Item eventKey="4-2">Websites</Nav.Item>
                            <Nav.Item eventKey="4-3">Channels</Nav.Item>
                            <Nav.Item eventKey="4-4">Tags</Nav.Item>
                            <Nav.Item eventKey="4-5">Versions</Nav.Item>
                        </Nav.Menu> */}
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>
    );
};
