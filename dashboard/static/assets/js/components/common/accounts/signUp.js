import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Modal, Button } from 'rsuite';

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

    const [open, setOpen] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password1: '',
        password2: '',
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        window.location.href = "/login";
    };

    const handleChange = (e) => {
        if (formSubmitted) validateForm();
        if (e.target.name === "password2") {
            if (e.target.value !== formData.password1) {
                e.target.classList.add("is-invalid");
            } else {
                e.target.classList.remove("is-invalid");
            }
        }
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        const status = validateForm();

        if (formData.password1 !== formData.password2) {
            notyf.error("Passwords do not match");
            return;
        }
        if (status) {
            createUserFunction(formData);
        }
    }

    function validateForm() {
        let validationStatus = true;
        document.querySelectorAll("input").forEach((item) => {
            if (item.value === "") {
                item.classList.add("is-invalid");
                validationStatus = false;
            } else {
                item.classList.remove("is-invalid");
            }
        })
        return validationStatus;
    }

    function createUserFunction(data) {
        APICaller.CreateUserAPI(data).then((response) => {
            if (response.status === 400) {
                notyf.error("Kindly fill in all fields correctly");
            }
            if (response.status === 500) {
                notyf.error("An error occurred, please try again later");
            }
            if (response.status === 302) {
                notyf.error(response.data.message);
            }
            if (response.status === 201 || response.status === 200) {
                notyf.success("Account created successfully");
                handleOpen();
            }
        });
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Modal.Header>
                    <Modal.Title>Verification Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    A verification email has been sent to your email address. Please verify your email to login. 
                    Kindly check your spam folder if you do not see the email in your inbox.
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="w-100">
                <div className="container">
                    <div className="row align-items-center justify-content-center" style={{}}>
                        <div className="col-md-7">
                            <span className="fs-5 fs-sm-5 fs-md-2 fs-lg-2 fs-xl-2 fw-bolder">
                                SignUp to <strong>Scoop Investment</strong>
                            </span>
                            <p className="mb-4 fs-lg-5">
                                Welcome to Scoop Investment, it is our pleasure that you here
                                with us.
                            </p>
                            <form method="post" onSubmit={handleSubmit}>

                                <div className="form-group first">
                                    <label>First Name*</label>
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
                                    <label>Last Name*</label>
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
                                    <label>Email*</label>
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
                                    <label>Phone*</label>
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
                                    <label>New Password*</label>
                                    <div className="d-flex justify-content-end align-items-center">
                                        <input
                                            className="form-control"
                                            type = {showPassword1 ? "text" : "password"}
                                            name="password1"
                                            value={formData.password1}
                                            onChange={handleChange}
                                            placeholder="Your Password"
                                        />
                                        <i 
                                            className={`fa-solid ${!showPassword1 ? "fa-eye": "fa-eye-slash"} position-absolute cursor-pointer`}
                                            style={{
                                                marginRight: "30px"
                                            }}
                                            onClick={() => setShowPassword1(!showPassword1)}
                                        ></i>
                                    </div>
                                </div>

                                <div className="form-group last mb-3">
                                    <label>Confirm New Password*</label>
                                    <div className="d-flex justify-content-end align-items-center">
                                        <input
                                            className="form-control"
                                            type = {showPassword2 ? "text" : "password"}
                                            name="password2"
                                            value={formData.password2}
                                            onChange={handleChange}
                                            placeholder="Confirm Password"
                                        />
                                        <i 
                                            className={`fa-solid ${!showPassword2 ? "fa-eye": "fa-eye-slash"} position-absolute cursor-pointer`}
                                            style={{
                                                marginRight: "30px"
                                            }}
                                            onClick={() => setShowPassword2(!showPassword2)}
                                        ></i>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button
                                        type="submit"
                                        className="btn text-light"
                                        style={{
                                            textDecoration: "none",
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
        </>
    );
}
