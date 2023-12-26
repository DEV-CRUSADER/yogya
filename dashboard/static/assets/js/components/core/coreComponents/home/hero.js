import React from "react";

//importing css
import { CSS } from "../../../../../../css/home.css";

export function Hero() {
  return (
    <>
      <div className="hero-section d-flex justify-content-around align-items-center flex-column flex-sm-column 
          flex-md-column flex-lg-row flex-xl-row">
        <div
        id="hero-text"
          className="text-center  "
          style={{
            width: "100%",
          }}
        >
          <h1
            className="fw-bold"
            style={{
              color: "var(--primary-text)",
            }}
          >
            YOGYA
          </h1>
          <h1
            style={{
              fontSize: "7svh",
              color: "var(--secondary-text)",
              marginTop: "-45px",
            }}
          >
            CAPITAL
          </h1>
        </div>
        <div className="hero-vision p-5 ms-5">
          <h1
            className="fs-1"
            style={{
              color: "var(--secondary-color)",
            }}
          >
            Our Vision
          </h1>
          <p
            className="fs-5 p-3 "
            style={{
              textAlign: "justify",
              marginTop: "-20px",
              color: "var(--black)",
              opacity: "0.7",
            }}
          >
            In Yogya capital you are the first priority for us and we are here
            to help you to find various ways to achieve your dreams.
          </p>
        </div>
      </div>
    </>
  );
}
