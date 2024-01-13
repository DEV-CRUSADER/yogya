import React from 'react';

import { TabTitle } from "../core/scripts/general_function";
import { Login } from './dashboardComponents/accounts/login';
import { SignUp } from './dashboardComponents/accounts/signUp';




export function HomeView()  {
    TabTitle('Yogya|Home')
    return (
<>
        {/* // <div className="container"> */}
            {/* <h1>Dashboard Home View</h1> */}
            {/* <Login/> */}
            <SignUp/>
        {/* // </div> */}
        </>
    );
}