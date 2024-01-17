import React from 'react';

import { TabTitle } from "../core/scripts/general_function";

import { ClientData } from "../core/coreComponents/Form/form"


export function HomeView()  {
    TabTitle('Yogya|Home')
    return (

        <div className="container">
            <ClientData />
            <h1>Dashboard Home View 2</h1>
        </div>
    );
}