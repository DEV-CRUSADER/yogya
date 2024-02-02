import React, { useState } from "react";
import AOS from 'aos';

import { Link } from "react-router-dom";

import { SignUp } from "./signUp";
import { Login } from "./login";
import { ForgotPassword } from "./forgotPassword";

import loginViewImage from '../../../../img/login_image.webp'
import registerViewImage from '../../../../svg/signUp_image.svg'

import 'aos/dist/aos.css';

AOS.init();

export function ClientAuthenticationView({ formType }) {

    // formType = {'register', 'login', "password-reset"}

    return (
        <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row">
            <div className="w-100 w-sm-100 w-md-50 w-lg-50 d-flex flex-column p-2 p-sm-2 p-md-3 p-lg-4">
                <div className="">
                    <Link
                        className="btn fs-4 border border-light"
                        style={{
                            textDecoration: "none",
                            color: "var(--white)",
                            background: "var(--secondary-color)"
                        }}
                        to={(formType === 'login') ? "/register" : '/login'}
                    >
                        {(formType === 'login') ? "Sign Up" : "Sign In"}
                    </Link>
                </div>
                <div>
                    {(formType === 'register') ?
                        <SignUp /> :
                        (formType === 'login') ?<Login /> : <ForgotPassword />}
                </div>
            </div>
            <div className="w-100 w-sm-100 w-md-50 w-lg-50"
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