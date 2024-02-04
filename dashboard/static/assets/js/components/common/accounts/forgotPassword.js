import React, { useState } from "react";
import { notyf } from "../utils/notfy";
import { isEmail } from "validator";

import { APICaller } from "../scripts/server";

export function ForgotPassword() {

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "") {
            notyf.error("Email cannot be empty");
            return;
        } else if (isEmail(email)) {
            CallResetPassword({ email: email });
            notyf.success("Password reset link sent to your email");
        } else {
            notyf.error("Invalid Email");
        }
    };
    
    function CallResetPassword(data){
        APICaller.ResetPasswordAPI(data).then((response) => {
            if (response.status === 200) {
                notyf.success("Password reset link sent to your email");
            }
        });
    }

    return (

        <div className="w-100 pt-3">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7">
                        <div className="container text-center fs-4 fw-bolder">
                            Reset Password
                        </div>
                            <form method="GET" className="form needs-validation">
                                <div className="form-group first" style={{ marginTop: "2rem" }}>
                                    <label className="h5 text-center w-100">Email</label>
                                    <div className="input-group has-validation">
                                        <input
                                            style={{ marginTop: "10px" }}
                                            className="form-control text-center"
                                            type="email"
                                            name="email"
                                            value={email}
                                            placeholder="Enter Your Email To Verify"
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Enter a valid email
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="text-center">
                                    <button
                                        style={{ backgroundColor: "var(--secondary-color)" }}
                                        className="btn text-light"
                                        onClick={handleSubmit}
                                    >
                                        Verify
                                    </button>
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
