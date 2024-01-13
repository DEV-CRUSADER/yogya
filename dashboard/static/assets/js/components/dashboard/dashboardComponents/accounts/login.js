import React, { useState } from "react";
import { CSS } from "./css/style.css";
import background from "./login_image.webp";

export function Login() {
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
                  Login to <strong>Yogya Capital</strong>
                </h3>
                <p className="mb-4">
                  Welcome to Yogya Capital, it is our pleasure that you here
                  with us.
                </p>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your-email@gmail.com"
                      id="username"
                    />
                  </div>
                  <br />
                  <div className="form-group last mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      id="password"
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Remember me</span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                  </div>

                  <a href="/" className="bn3 fs-6">Login</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
