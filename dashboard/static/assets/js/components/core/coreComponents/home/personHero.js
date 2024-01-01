import React from "react";

import { CSS } from "../../../../../../css/home.css";
import theGame from "../../../../../img/skinIntheGame.png";
import selling from "../../../../../img/misSelling.png";

export function PersonHero() {
  
  return (
    <div
      className="hero-section-2 m-1 mt-md-5 mt-lg-5 mt-xl-5">

<div className="d-flex flex-column justify-content-around 
                      align-items-center"
        style={{
          color: "var(--white)",
        }}
      >
        <h1 style={{ color: "var(--teritary-color)"  }}>WHO ARE WE?</h1>
        <span className="text-center mb-5 p-2 w-75"
          style={{
            color: "var(--secondary-color)",
          }}
        >
          Yogya Financial Capital is a dynamic financial services company dedicated to empowering individuals and businesses through innovative and client-centric financial solutions. With a focus on integrity and excellence, Yogya Financial Capital strives to be a trusted partner in financial success, offering a comprehensive range of services including investment management, wealth advisory, and tailored financial planning. The company is committed to navigating the ever-changing financial landscape with expertise and agility, ensuring clients achieve their long-term financial goals.
        </span>
        <h1 className="main-head text-center " style={{ color: "var(--teritary-color)"}}>WHY US?</h1>
        <div className="d-flex justify-content-around flex-column flex-sm-column 
          flex-md-column flex-lg-row flex-xl-row"
          style={{
            width: "75%",
            
          }}
        >
          <ServiceCard image={selling} head="No misselling"
            detail="We only suggest products which fulfills your goals." />
          <ServiceCard image={theGame} head="Skin in the game"
            detail="We suggest products where we ourselves would invest own money along
          with yours."/>
        </div>
      </div>
    </div>
  );
}

export function ServiceCard({ image, head, detail }) {
  return (
    <div
      className="text-center d-flex flex-column 
        justify-content-center align-items-center my-sm-3"
    >
      <img
        src={image}
        alt={head}
        className="img-fluid"
        style={{
          height: "150px",
        }}
      />
      <h2 className="head-text mt-2">{head}</h2>
      <p
        className="general-text"
        style={{
          width: "300px",
          color: "var(--black)",
          opacity: 0.6
        }}
      >
        {detail}
      </p>
    </div>
  );
}