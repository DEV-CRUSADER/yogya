import React, { useState } from 'react';
import { TabTitle } from "../core/scripts/general_function";
import { SideBar } from './components/sideBar';
import { NavBar } from './components/navBar';
import { DashboardBody } from './components/dashboardBody';
import { Route, Switch } from 'react-router-dom';
import { Clients } from './components/clients';



export function DashboardHomeView() {
    TabTitle('Yogya | Home')
    return (
        <>
            <div style={{ backgroundColor: "#ffffff" }}>

                {/* <Switch>
                    <Route path="/dashboard" exact>
                        <div>
                            <NavBar />
                        </div>
                        <div className='d-flex'>
                            <SideBar />
                            <div className='col'>
                                <DashboardBody />
                            </div>
                        </div>
                    </Route>
                    <Route path="/dashboard/clients" exact>
                        <div>
                            <Clients />
                        </div>
                    </Route>
                    <Route path="/dashboard/clients/:id" exact>
                    <div>
                        <NavBar />
                    </div>
                    <div className='d-flex'>
                        <SideBar />
                        <div className='col'>
                            <DashboardBody />
                        </div>
                    </div>
                </Route> 
                </Switch> */}
                <div>
                    <NavBar />
                </div>
                <div className='d-flex'>
                    <SideBar />
                    <div className='col'>
                        <DashboardBody />
                    </div>
                </div>

            </div>
        </>
    );
}