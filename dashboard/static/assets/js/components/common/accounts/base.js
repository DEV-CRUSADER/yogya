import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import { SignUp } from "./signUp";
import { Login } from "./login";
import { ForgotPassword } from "./forgotPassword";

import { TabTitle } from "../../core/scripts/general_function";

import loginViewImage from '../../../../img/login_image.webp'
import registerViewImage from '../../../../img/signUp_image.png'

import '../../../../../css/common/accounts/style.css';

export function ClientAuthenticationView({ formType }) {

    const location = useLocation();

    if (location.pathname === "/register") {
        TabTitle('Register to Yogya Capital')
    } else if (location.pathname === "/login") {
        TabTitle('Login to Yogya Capital')
    } else if (location.pathname === "/password-reset") {
        TabTitle('Reset your password')
    }

    // formType = {'register', 'login', "password-reset"}

    return (
        <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row" style={{ height: "100vh" }}>
            <div className="w-100 w-sm-100 w-md-50 w-lg-50 d-flex flex-column p-2 p-sm-2 p-md-3 p-lg-4">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    {(formType === 'register') ?
                        <SignUp /> :
                        (formType === 'login') ? <Login /> : <ForgotPassword />}
                    <hr
                        className="my-4"
                        style={{
                            width: "50%",
                            border: "1px solid var(--teritary-color)",
                        }}
                    />
                    <Link
                        className="btn fs-5 text-decoration-none account-btn"
                        to={(formType === 'login') ? '/register' : '/login'}
                        style={{ marginRight: "10px" }}
                    >
                        {(formType === 'login') ? "Don't have an account? Sign up" : "Already have an account? Log in"}
                    </Link> <br /> <br />
                </div>
            </div>
            <div className="w-100 w-sm-100 w-md-50 w-lg-50 d-flex justify-content-center align-items-center p-2 p-sm-2 p-md-3 p-lg-4"
                style={{
                    background: `var(--secondary-color)`
                }}
            >
                <img
                    data-aos={(formType === 'login') ? "zoom-in" : "zoom-out"}
                    src={(formType === 'login') ? loginViewImage : registerViewImage}
                    alt="Register to Yogya Caoital"
                    className="w-100"
                />
            </div>
        </div>
    )
}