import React from 'react';

import { TabTitle } from "../core/scripts/general_function";
import { ClientData } from "./client_elements/form"


export function HomeView()  {
    TabTitle('Yogya | Admin Dashboard')
    return (

        <div className="container">
            <ClientData />
        </div>
    );
}