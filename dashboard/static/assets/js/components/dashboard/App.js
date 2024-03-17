import React, { useState } from 'react';
import { TabTitle } from "../core/scripts/general_function";
import { SideBar } from './components/sideBar';
import { NavBar } from './components/navBar';
import { DashboardBody } from './components/dashboardBody';



export function DashboardHomeView() {
    TabTitle('Yogya | Home')
    return (
        <>
            <div style={{backgroundColor: "#ffffff"}}>
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