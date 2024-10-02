import React, { useState } from 'react';
import { ClientDataForm } from "./client_elements/form"


// export function HomeView()  {

import TableElement from './next_ui_testing/index';


export function DashboardHomeView()  {
    TabTitle('Scoop Investment | Admin Dashboard');
    return (
        <>
            <div 
                className='d-flex justify-content-center align-items-center
                    fs-5 fs-md-4 fs-xl-2 fs-xxl-1 fw-bold text-secondary text-uppercase w-100'
                style={{height: '100vh'}}
            >
                <TableElement />
            </div>
        </>
    );
}