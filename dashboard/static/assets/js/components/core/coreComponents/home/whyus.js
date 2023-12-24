import React from "react";

import { CSS } from "../../../../../../css/home.css";
import theGame from "../../../../../img/skinIntheGame.png";
import selling from "../../../../../img/misSelling.png";

export function WhyUs() {
  return (
    <>
      <div className="hero-section-3 d-flex row ">
        <h1 className="main-head text-center ">WHY US?</h1>
        <div className="hero-section-3i col text-center">
          <img src={selling} alt="misSelling" />
          <h2 className="head-text  "> Skin in the game </h2>
          <p className="general-text ">
          We only suggest products which fulfills your goals.
          </p>
        </div>
        <div className="hero-section-3i col text-center"> 
          <img src={theGame} alt="skinIntheGame" />
          <h2 className="head-text "> Skin in the game </h2>
          <p className="general-text ">
            We suggest products where we ourselves would invest own money along
            with yours.
          </p>
        </div>
      </div>
    </>
  );
}
