import React, { useState } from "react";
import { CSS } from "./css/style.css";
import background from "./login_image.webp";
import { ForgotPassword } from "./forgotPassword";
import { ToggleButton } from "../../App"


export function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  return (
    <div className="" >
      <div className="d-lg-flex half" style={{backgroundColor: "var(--secondary-color)"}}>
        <div
          id="init-login-bg"
          className="bg order-1 order-md-2"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center" style={{backgroundColor: "var(--primary-text)"}}>

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
                      name="username"
                      value={formData.username}
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
                  <div className="d-flex mb-5 align-items-center">
                    <a href="" onClick={handleForgotPasswordClick} style={{marginRight: "10px"}}>forgot password</a> <br />
                    <label className="control control--checkbox mb-0">
                      <input type="checkbox" />
                      <span className="caption">Remember me</span>
                      <div className="control__indicator"></div>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bn3 fs-6 text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Log In
                  </button>
                </form>

                {showForgotPassword && <ForgotPassword />}
              </div>
            </div>
          </div>
        </div>
        <div
          id="small-device-bg-login"
          className="bg order-1 order-md-2"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
