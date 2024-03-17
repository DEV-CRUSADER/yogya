import React from 'react';
import './reactSuit.css';

import { Sidenav, Nav, Toggle } from 'rsuite';

export function SideBar() {
    const [expanded, setExpanded] = React.useState(true);

    // Conditionally set the width of the sidebar
    const sidebarWidth = expanded ? 240 : 57;

    return (
        <>
            <div
                className=""
                style={{
                    width: sidebarWidth,
                    marginTop: '-51px',
                    backgroundColor: '#104ccc',
                }}>
                <Toggle
                    className='mt-3 ms-1'
                    onChange={setExpanded}
                    checked={expanded}
                    // checkedChildren=""
                    // unCheckedChildren=""
                />
                <Sidenav
                    className='mt-4'
                    expanded={expanded}
                    defaultOpenKeys={['3', '4']}
                    style={{
                        height: "93.4vh",
                        backgroundColor: "#104ccc",
                        boxShadow: 'rgba(0, 0, 0, 1) 0px 50px 50px -15px',
                    }}>
                    <div className=''>
                        <div className=''>
                            {sidebarWidth === 57 ? (
                                <>
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i
                                                className="bi bi-menu-button active-icon p-2"
                                                style={{
                                                    fontSize: '20px',
                                                    marginLeft: '10px',
                                                    borderRadius: '4px',
                                                    backgroundColor: '#34b45c',
                                                    boxShadow: 'rgba(0, 0, 0, 0) 0px 60px 40px -7px'
                                                }}>
                                            </i>
                                        </div>
                                    </a>
                                    <hr />
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i
                                                className="bi bi-person-vcard p-2"
                                                style={{
                                                    fontSize: '20px',
                                                    marginLeft: '10px',
                                                    borderRadius: '4px',
                                                    backgroundColor: '#34b45c',
                                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px'
                                                }}>
                                            </i>
                                        </div>
                                    </a>
                                    <hr />
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i
                                                className="bi bi-cassette p-2"
                                                style={{
                                                    fontSize: '20px',
                                                    marginLeft: '10px',
                                                    borderRadius: '4px',
                                                    backgroundColor: '#34b45c',
                                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px'
                                                }}>
                                            </i>
                                        </div>
                                    </a>
                                    <hr />
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i
                                                className="bi bi-gear-wide-connected p-2"
                                                style={{
                                                    fontSize: '20px',
                                                    marginLeft: '10px',
                                                    borderRadius: '4px',
                                                    backgroundColor: '#34b45c',
                                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px'
                                                }}>
                                            </i>
                                        </div>
                                    </a>
                                    {/* Add more icon-only links as needed */}
                                </>

                            ) : (
                                <>
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i className="bi bi-menu-button" style={{ fontSize: '30px', marginLeft: '12px' }}></i>
                                        </div>
                                        <h5 className="">Dashboard</h5>
                                    </a>
                                    <hr />
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i className="bi bi-person-vcard" style={{ fontSize: '30px', marginLeft: '12px' }}></i>
                                        </div>
                                        <h5 className="">Clients</h5>
                                    </a>
                                    <hr />
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i className="bi bi-cassette" style={{ fontSize: '30px', marginLeft: '12px' }}></i>
                                        </div>
                                        <h5 className="">Family</h5>
                                    </a>
                                    <hr />
                                    <a href="" className='text-decoration-none text-light d-flex align-items-center'>
                                        <div className='me-3'>
                                            <i className="bi bi-gear-wide-connected" style={{ fontSize: '30px', marginLeft: '12px' }}></i>
                                        </div>
                                        <h5 className="">Setting</h5>
                                    </a>
                                </>
                            )}
                        </div>

                    </div>

                </Sidenav>
            </div>
        </>
    );
};