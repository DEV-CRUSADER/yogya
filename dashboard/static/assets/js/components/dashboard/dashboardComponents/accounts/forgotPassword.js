import React, { useState } from "react";
import background from "./login_image.webp";

export function ForgotPassword() {

    const [email, setEmail] = useState();
    const [otpSent, setOtpSent] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // backend to send the OTP to the provided email
        setOtpSent(true);
    };

    return (
        <div>
            <div className="d-lg-flex half">
                <div
                    className="bg order-1 order-md-2"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>
                <div className="contents order-2 order-md-1">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7">

                                <h3>
                                    Forgot Your <strong>Password ?</strong>
                                </h3>
                                {!otpSent ? (
                                    <form method="GET" className="form" onSubmit={handleSubmit}>
                                        <div className="form-group first">
                                        <label>Email</label>
                                        <br />
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            value={email}
                                            placeholder="Enter Your Email To Verify"
                                            onChange={handleChange}
                                            required
                                        />
                                        </div>
                                        <br />
                                        <button type="submit" className="bn3 fs-6 text-dark">Verify</button>
                                    </form>
                                ) : (
                                    <p>OTP sent to {email}. Check your email for verification.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
