import React from 'react';
import './reactSuit.css';

import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';




export function SideBar() {
    return (
        <>
            <div
                className=''
                style={{
                    width: 240,
                    height: '100%',
                }}
            >
                <Sidenav defaultOpenKeys={['3', '4']}
                >
                    <Sidenav.Body
                    style={{
                        height: "95vh",
                        backgroundColor: 'var(--primary -color)',
                        }}
                    >
                        <Nav>
                            <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                User Group
                            </Nav.Item>
                            <Nav.Item divider />
                            <hr style={{ borderColor: 'black' }} />
                            <Nav.Item>
                                Reports
                            </Nav.Item>
                            <Nav.Item eventKey="3-1">Geo</Nav.Item>
                            <Nav.Item eventKey="3-2">Devices</Nav.Item>
                            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                            <Nav.Item divider />
                            <hr style={{ borderColor: 'black' }} />
                            <Nav.Item>
                                Settings
                            </Nav.Item>
                            <Nav.Item eventKey="4-1">Applications</Nav.Item>
                            <Nav.Item eventKey="4-2">Channels</Nav.Item>
                            <Nav.Item eventKey="4-3">Versions</Nav.Item>
                            <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                            <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
        </>
    );
}