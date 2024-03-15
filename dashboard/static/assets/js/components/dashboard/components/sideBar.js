import React from 'react';
import './reactSuit.css';

import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

export function SideBar() {
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');

    // Conditionally set the width of the sidebar
    const sidebarWidth = expanded ? 240 : 56;

    return (
        <div
            className=""
            style={{
                width: sidebarWidth,
                backgroundColor: 'var(--secondary-color)',
            }}>
            <Toggle
                className='mt-3'
                onChange={setExpanded}
                checked={expanded}
                checkedChildren=""
                unCheckedChildren=""
            />
            {/* <hr style={{marginBottom: "4px"}}/> */}
            <Sidenav
                className='mt-4'
                expanded={expanded}
                defaultOpenKeys={['3', '4']}
                style={{
                    height: "88vh",
                    // backgroundColor: 'var(--primary-color)',
                }}
            >
                <Sidenav.Body >
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                            Dashboard
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />}>
                            User Group
                        </Nav.Item>
                        {/* <hr style={{backgroundColor: 'var(--secondary-color)',}}/> */}
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="3" 
                            title="Advanced"
                            icon={<MagicIcon />}
                            style={{ backgroundColor: "white" }}
                        >
                            <div className="p-3" style={{
                                backgroundColor: "",
                            }}>
                                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                            </div>
                        </Nav.Menu>
                        {/* <hr /> */}
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="4"
                            title="Settings"
                            icon={<GearCircleIcon />}
                            style={{ backgroundColor: "white" }}
                        >
                            <Nav.Item eventKey="4-1">Applications</Nav.Item>
                            <Nav.Item eventKey="4-2">Channels</Nav.Item>
                            <Nav.Item eventKey="4-3">Versions</Nav.Item>
                            <Nav.Menu eventKey="4-5" title="Custom Action">
                                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
                {/* <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} /> */}
            </Sidenav>
        </div>
    );
};