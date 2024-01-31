import React, { useState } from 'react';
import { TabTitle } from "../core/scripts/general_function";
import { Login } from './dashboardComponents/accounts/login';
import { SignUp } from './dashboardComponents/accounts/signUp';



export function HomeView() {

    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    TabTitle('Yogya|Home')
    return (
        <>
            <div>
                <div className="container p-">
                    <button onClick={toggleForm} className='p-2'>
                        {isLoginForm ? "Sign Up" : "Log In"}
                    </button>
                    {isLoginForm ? <Login /> : <SignUp /> }
                </div>
            </div>
        </>
    );
}