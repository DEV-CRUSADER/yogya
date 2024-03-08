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

<<<<<<< HEAD
export function WhyUs() {

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
    <div className="hero-section-3  position-relative p-5">

<Profile
        image={chirag}
        name="Chirag Jain"
        description="Chirag Jain, a passionate about finance has cleared Level 3 of the CFA Program. He has been managing family portfolio along with providing mutual fund research to clients for past 3 years. He has previously worked with - Concept Investwell, Kamayakya & Investeek
        "
        socials={chiragSocials}
        direction="left"
      />


      
      
=======
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
>>>>>>> master
    </div>
  );
}

<<<<<<< HEAD

=======
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
>>>>>>> master
