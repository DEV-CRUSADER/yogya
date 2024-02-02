import React, { useState } from "react";

export function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        setTimeout(() => {
            setOtpSent(true);
        },);

        // backend to send the OTP to the provided email
        setOtpSent(true);
        console.log("OTP Sent")
    };

    const handleOtpValidation = (e) => {
        e.preventDefault();

        // Validate OTP logic here
        console.log("OTP Validated");
    };

    return (

        <div className="contents order-2 order-md-1">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7">

                        <h3>
                            Forgot Your <strong>Password ?</strong>
                        </h3>
                        {!otpSent ? (
                            <form method="GET" className="form" onSubmit={handleSubmit}>
                                <div className="form-group first" style={{ marginTop: "2rem" }}>
                                    <label className="h5">Email</label>
                                    <br />
                                    <input
                                        style={{ marginTop: "10px" }}
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
                                <button
                                    style={{ backgroundColor: "var(--secondary-color)" }}
                                    type="submit"
                                    className="btn text-light"
                                >
                                    Verify
                                </button>
                                <div style={{ marginTop: "10px" }}>
                                    <p><strong>*NOTE</strong> : OTP will be sent to your E-mail</p>
                                </div>
                            </form>
                        ) : (
                            // <p>OTP sent to {email}. Check your email for verification.</p>

                            <form method="POST" className="form" onSubmit={handleOtpValidation}>
                                <div className="form-group first" style={{ marginTop: "2rem" }}>
                                    <label className="h5">OTP</label>
                                    <br />
                                    <input
                                        style={{ marginTop: "10px" }}
                                        className="form-control"
                                        type="text"
                                        name="otp"
                                        value={otp}
                                        placeholder="Enter OTP"
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </div>
                                <br />
                                <button
                                    style={{ backgroundColor: "var(--secondary-color)" }}
                                    type="submit"
                                    className="btn text-light"
                                >
                                    Validate OTP
                                </button>

                                <div style={{ marginTop: "10px" }}>
                                    <p><strong>*NOTE :</strong> Check your given E-mail for OTP</p>
                                    <p><strong>Your E-mail</strong> : {email}</p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
