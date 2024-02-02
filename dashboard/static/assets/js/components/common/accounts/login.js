import React, { useState } from "react";
import { ForgotPassword } from "./forgotPassword";

import { Link } from "react-router-dom";


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
    <div className="contents order-2 order-md-1" >
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
                <Link
                  to={'/password-reset'}
                  onClick={handleForgotPasswordClick}
                  style={{ marginRight: "10px" }}
                >
                  forgot password
                </Link> <br /> <br />
                <label className="control control--checkbox mb-0">
                  <input type="checkbox" />
                  <span className="caption">Remember me</span>
                  <div className="control__indicator"></div>
                </label>
              </div>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
