import React from "react";
import { motion } from "framer-motion"

import { HiLightBulb } from "react-icons/hi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "../../../../../../css/home.css";
import 'react-vertical-timeline-component/style.min.css';

import theGame from "../../../../../img/skinIntheGame.png";
import selling from "../../../../../img/misSelling.png";
import chirag from "../../../../../img/chirag.png";
import { Profile } from "./profile";

export function WhyUsSectionWrapper() {

  return (
    <div
      className="hero-section-2 m-1 mt-3 mt-md-5 mt-lg-5 mt-xl-5">
      <div className="d-flex flex-column justify-content-around 
                      align-items-center"
        style={{
          color: "var(--white)",
        }}
      >
        <WhoWeAre />
        <WhyUs />
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
        data-aos="zoom-in-up"
      />
      <h2
        className="head-text mt-2"
        style={{
          color: "var(--teritary-color)",
        }}
        data-aos="zoom-in"
      >
        {head}
      </h2>
      <p
        className="general-text"
        style={{
          width: "300px",
          color: "var(--black)",
          opacity: 0.6
        }}
        data-aos="zoom-in"
      >
        {detail}
      </p>
    </div>
  );
}

export function WhyUs() {
  return (
    <>
      <h1 className="main-head text-center" style={{ color: "var(--teritary-color)" }}>WHY US?</h1>
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
    </>
  )
}

export const WhoWeAreData = [
  {
    text: "Innovative and client-centric financial solutions.",
    icon: <HiLightBulb />
  },
  {
    text: "Offering a comprehensive range of services",
    icon: <MdOutlineAutoGraph />
  },{
    text: "Tailored financial planning for clients achieve their dreams.",
    icon: <GiMoneyStack />
  }
]

const WhoWeAre = () => {
  return (
    <>
      <h1 className="main-head text-center" style={{ color: "var(--teritary-color)" }}>WHO WE ARE?</h1>
      <motion.div className="d-flex justify-content-around flex-column flex-sm-column 
            flex-md-column flex-lg-row flex-xl-row"
        style={{
          width: "75%",
        }}
      >

        <VerticalTimeline>
          {WhoWeAreData.map((item, index) => (
            <WhoWeAreCard text={item.text} icon={item.icon} key={index} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  )
}



export function WhoWeAreCard({ text, icon }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'var(--secondary-color)', color: 'var(--secondary-text)' }}
      contentArrowStyle={{ borderRight: '7px solid var(--secondary-color)' }}
      iconStyle={{ 
        background: 'var(--main-color)', 
        color: 'var(--secondary-color)', 
      }}
      icon={icon}
    >
      <p>
        {text}
      </p>
    </VerticalTimelineElement>
  )
}
