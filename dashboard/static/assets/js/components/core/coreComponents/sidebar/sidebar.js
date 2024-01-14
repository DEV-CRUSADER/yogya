import React from "react";
import { Sidebar, Sidenav, Navbar, Nav, Modal, Toggle, Button, ButtonToolbar, Placeholder} from 'rsuite';
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
    setDataFound, setIndexName, setLabels, setChartData, setNoData }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);


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
                                    setNoData={setNoData}
                                    handleClose={handleClose}
                                />
                            </Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
};

export function TopBar({ setDataFound, setIndexName, setLabels, setChartData, setNoData}){
    const [open, setOpen] = React.useState(false);
    const [overflow, setOverflow] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ButtonToolbar className="d-flex justify-content-center">
                <Button onClick={handleOpen}
                    className="btn"
                    sizetyle={{
                        backgroundColor: "var(--teritary-color)",
                    }}
                ><FunnelTimeIcon />&nbsp;Load another chart</Button>
            </ButtonToolbar>
            <Modal overflow={overflow} open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Choose Chart Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ChartsIndexFrom
                        setChartData={setChartData}
                        setLabels={setLabels}
                        setDataFound={setDataFound}
                        setIndexName={setIndexName}
                        setNoData={setNoData}
                        handleClose={handleClose}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};