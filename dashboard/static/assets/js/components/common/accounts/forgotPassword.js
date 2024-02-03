import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate an API call to send OTP
        try {
            // Replace this with your actual API call
            const response = await fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            switch (response.status) {
                case 200:
                    setOtpSent(true);
                    differentToast();
                    break;
                case 300:
                    setOtpSent(true);
                    warnToast();
                    break;
                case 404:
                    setOtpSent(true);
                    errorToast();
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log("Error in sending OTP", error);
        }
    };
    //     if (response.status === 200) {
    //         setOtpSent(true);
    //         successToast();
    //     } else if (response.status === 300) {
    //         warnToast();
    //     } else if (response.status === 404) {
    //         errorToast();
    //     } else {
    //         // Handle other status codes if needed
    //     }
    // } catch (error) {
    //     console.error('Error sending OTP:', error);
    // }

    // setTimeout(() => {
    //     setOtpSent(true);
    // },);

    // // backend to send the OTP to the provided email
    // setOtpSent(true);
    // console.log("OTP Sent")
    // };

    const handleOtpValidation = (e) => {
        e.preventDefault();

        // Validate OTP logic here
        console.log("OTP Validated");
    };
    const differentToast = () => {
        toast.success("OTP Sent Successfylly", {
            position: "top-center"
        })
    }
    const warnToast = () => {
        toast.warn("Warning Message for Status 300", {
            position: "top-left",
        });
    };

    const errorToast = () => {
        toast.error("Error Message for Status 404", {
            position: "top-right",
        });
    };

    return (

        <div className="contents order-2 order-md-1">
            <div className="container" style={{marginTop: "20svh"}}>
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
                                    onClick={handleSubmit}
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
                                </div>
                                <ToastContainer />
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
