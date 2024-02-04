import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { notyf } from "../utils/notfy";

import { APICaller } from "../scripts/server";


export function Login() {

    const navigate = useNavigate();


    useEffect(() => {
        CheckLogin();
    }, []);

    function CheckLogin() {
        APICaller.CheckLoginStatusAPI().then((response) => {
            if (response.status === true) {
                console.log("Not logged in");
                navigate("/");
            } else {
                console.log("Logged in");
            }
        });
    }

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loginUserFunction(formData)) {
            notyf.success("Logged in successfully");
        }
    }

    function loginUserFunction(data) {
        APICaller.LoginUserAPI(data)
            .then((response) => {
                if (response.status) {
                    notyf.success("Logged in successfully");
                    window.location.href = "/resources";
                }
                return true;
            })
            .catch((error) => {
                notyf.error("Invalid credentials");
                return false;
            });
    }


    return (
        <div className="w-100">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 ">
                        <h3>
                            Login to <strong>Yogya Capital</strong>
                        </h3>
                        <p className="mb-4">
                            Welcome to Yogya Capital, it is our pleasure that you here
                            with us.
                        </p>
                        <form method="GET" onSubmit={handleSubmit}>
                            <div className="form-group first">
                                <label>Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your_email@gmail.com"
                                    required
                                />
                            </div>
                            <br />
                            <div className="form-group last mb-3">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Your Password"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column justify-content-center  align-items-center">
                                <button
                                    type="submit"
                                    className="btn text-light"
                                    style={{
                                        textDecoration: "none",
                                        backgroundColor: "var(--secondary-color)"
                                    }}
                                >
                                    Log In
                                </button>
                                <Link
                                    className="fs-6 my-2"
                                    to={'/password-reset'}
                                    style={{ marginRight: "10px" }}
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
