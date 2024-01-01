import React from "react";

import chirag from "../../../../../img/chirag.png";
import {CSS} from "../../../../../../css/home.css"
import { Profile } from "./profile";
import theGame from "../../../../../img/skinIntheGame.png";
import selling from "../../../../../img/misSelling.png";

export function PersonHero() {
  const chiragSocials = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/chirag-jain-2b3b781a5/",
    },
    {
      id: 2,
      name: "X",
      link: "https://x.com/Chiragjain1097?t=IKywbG_u9so3G1tZkGZdiQ&s=09",
    },
    {
      id: 3,
      name: "Email",
      link: "mailto:chiragjain@yahoo.com",
    },
    {
      id: 4,
      name: "Phone",
      link: "tel:+91-7567473055",
    },
    {
      id: 5,
      name: "Whatsapp",
      link: "https://wa.me/917567473055",
    }
  ];

  return (
    <div
      className="hero-section-2 m-0 mt-md-5 mt-lg-5 mt-xl-5">
        <div className="d-flex flex-column justify-content-around 
                      align-items-center"
        style={{
          color: "var(--teritary-color)",
        }}
      >
        <h1>WHO ARE WE?</h1>
        <span className="text-center mb-5 p-2 w-75"
          style={{
            color: "var(--secondary-color)",
          }}
        >
          Yogya Financial Capital is a dynamic financial services company dedicated to empowering individuals and businesses through innovative and client-centric financial solutions. With a focus on integrity and excellence, Yogya Financial Capital strives to be a trusted partner in financial success, offering a comprehensive range of services including investment management, wealth advisory, and tailored financial planning. The company is committed to navigating the ever-changing financial landscape with expertise and agility, ensuring clients achieve their long-term financial goals.
        </span>
        <h1 className="main-head text-center ">WHY US?</h1>
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

      {/* <Profile
        image={chirag}
        name="Chirag Jain"
        description="Chirag Jain, a passionate about finance has cleared Level 3 of the CFA Program. He has been managing family portfolio along with providing mutual fund research to clients for past 3 years. He has previously worked with - Concept Investwell, Kamayakya & Investeek
        "
        socials={chiragSocials}
        direction="left"
      /> */}
    </div>
  );
}


export function ServiceCard({ image, head, detail }) {
  return (
    <div className="text-center d-flex flex-column 
        justify-content-center align-items-center my-sm-3">
      <img src={image} alt={head} className="img-fluid"
        style={{
          height: "150px"
        }}
      />
      <h2 className="head-text mt-2">{head}</h2>
      <p className="general-text"
        style={{
          width: "300px",
          color: "var(--grey)",
        }}
      >
        {detail}
      </p>
    </div>
  )
}
