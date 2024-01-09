import React from "react";

//importing css
import "../../../../../../css/home.css";

export function Hero() {
  return (
    <>
      <div className="hero-section d-flex justify-content-around align-items-center flex-column flex-sm-column 
          flex-md-column flex-lg-row flex-xl-row pt-5">
        <div
        id="hero-text"
          className="text-center"
          style={{
            width: "100%",
          }}
        >
          <h1
            className="fw-bold hero-header"
            style={{
              color: "var(--primary-text)",
            }}
          >
            YOGYA
          </h1>
          <h1
            id="capital-text"
          >
            CAPITAL
          </h1>
        </div>
        <div className="p-5 ms-5">
          <span
            className="fw-bold display-6"
            style={{
              color: "var(--main-color)",
            }}
          >
            Our Vision
          </span>
          <p
            className="fs-5 p-3 "
            style={{
              textAlign: "justify",
              marginTop: "-20px",
              color: "var(--white)",
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
