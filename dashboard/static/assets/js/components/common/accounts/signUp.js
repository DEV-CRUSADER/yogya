import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notyf } from "../utils/notfy";

import { APICaller } from '../scripts/server';

export function SignUp() {

    const navigate = useNavigate();

    useEffect(() => {
        CheckLogin();
    }, []);

    function CheckLogin() {
        APICaller.CheckLoginStatusAPI().then((response) => {
            if (response.status === true) {
                navigate("/");
            }
        });
    }


    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password1: '',
        password2: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password1 !== formData.password2) {
            notyf.error("Passwords do not match");
            return;
        }
        createUserFunction(formData);
    }

    function createUserFunction(data){
        APICaller.CreateUserAPI(data).then((response) => {
            if (response.status === 201) {
                notyf.success("Account created successfully");
                notyf.open({
                    type: 'warning',
                    message: 'Verify your email to login',
                })
                window.location.href = "/login";
            }
        });
    }

    return (
        <div className="w-100">
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ }}>
                    <div className="col-md-7">
                        <span className="fs-5 fs-sm-5 fs-md-2 fs-lg-2 fs-xl-2 fw-bolder">
                            SignUp to <strong>Yogya Capital</strong>
                        </span>
                        <p className="mb-4 fs-lg-5">
                            Welcome to Yogya Capital, it is our pleasure that you here
                            with us.
                        </p>
                        <form method="post" onSubmit={handleSubmit}>

                            <div className="form-group first">
                                <label>First Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    placeholder="Enter First Name"
                                />
                            </div>
                            <br />
                            <div className="form-group first">
                                <label>Last Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    placeholder="Enter Last Name"
                                />
                            </div>

                            <br />
                            <div className="form-group last mb-3">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-group last mb-3">
                                <label>Phone</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="form-group last mb-3">
                                <label>New Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password1"
                                    value={formData.password1}
                                    onChange={handleChange}
                                    placeholder="Your Password"
                                />
                            </div>

                            <div className="form-group last mb-3">
                                <label>Confirm New Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password2"
                                    value={formData.password2}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button
                                    type="submit"
                                    className="btn text-light"
                                    style={{ textDecoration: "none",
                                    backgroundColor: "var(--secondary-color)"
                                }}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
