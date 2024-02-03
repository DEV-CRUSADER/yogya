import React, { useState } from "react";

export function SignUp() {

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
        console.log('Form submitted:', formData);
    }

    return (
        <div className="contents order-2 order-md-1">
            <div className="container" style={{marginTop: "10svh"}}>
                <div className="row align-items-center justify-content-center" style={{ }}>
                    <div className="col-md-7">
                        <h3>
                            SignUp to <strong>Yogya Capital</strong>
                        </h3>
                        <p className="mb-4">
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
                                <label>Password</label>
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
                                <label>Confirm Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password2"
                                    value={formData.password2}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn text-light"
                                style={{ textDecoration: "none",
                                backgroundColor: "var(--secondary-color)"
                            }}
                            >
                                Sign Up
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
