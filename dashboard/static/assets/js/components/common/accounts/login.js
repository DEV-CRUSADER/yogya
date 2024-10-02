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
                navigate("/");
            }
        });
    }

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        if (formSubmitted) validateForm(false);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function validateForm() {
        let validationStatus = true;
        document.querySelectorAll('input').forEach((item) => {
            if (item.value === '') {
                item.classList.add('is-invalid');
                validationStatus = false;
            } else {
                item.classList.remove('is-invalid');
            }
        });
        return validationStatus;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (validateForm()) {
            if (loginUserFunction(formData)) {
                notyf.success("Logged in successfully");
            }
        }
    }

    function loginUserFunction(data) {
        APICaller.LoginUserAPI(data)
            .then((response) => {
                if (response.status == 200) {
                    notyf.success("Logged in successfully");
                    window.location.href = "/resources";
                } else {
                    notyf.error(response.data.message);
                }
                return false;
            })
    }


    return (
        <div className="w-100">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 ">
                        <h3>
                            Login to <strong>Scoop Investment</strong>
                        </h3>
                        <p className="mb-4">
                            Welcome to Scoop Investment, it is our pleasure that you here
                            with us.
                        </p>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="form-group first">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@domain.com"
                                />
                            </div>
                            <br />
                            <div className="form-group last mb-3">
                                <label>Password</label>
                                <div className="d-flex justify-content-end align-items-center">
                                    <input
                                        className="form-control"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                        <i 
                                            className={`fa-solid ${!showPassword ? "fa-eye": "fa-eye-slash"} position-absolute cursor-pointer`}
                                            style={{
                                                marginRight: "30px"
                                            }}
                                            onClick={() => setShowPassword(!showPassword)}
                                        ></i>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center  align-items-center">
                                <button
                                    className="btn text-light"
                                    style={{
                                        textDecoration: "none",
                                        backgroundColor: "var(--secondary-color)"
                                    }}
                                >
                                    Log In
                                </button>
                                <Link
                                    className="fs-6 my-2 text-decoration-underline"
                                    to={'/password-reset'}
                                    style={{ marginRight: "10px", color: "blue"}}
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
