import React from "react";

import chirag from "../../../../../img/chirag.png";
import { Profile } from "./profile";

export function PersonHero() {
  const chiragSocials = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/chirag-jain-16334483/",
    },
    {
      id: 2,
      name: "X",
      link: "https://x.com/Chiragjain1097?t=IKywbG_u9so3G1tZkGZdiQ&s=09",
    },
    {
      id: 3,
      name: "Email",
      link: "mailto:chirag.jain@yogyacapital.com",
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
    <div className="hero-section-3  position-relative p-3">
      <Profile
        image={chirag}
        name="Chirag Jain"
        description="Chirag Jain, a passionate about finance has cleared Level 3 of the CFA Program. He has been managing family portfolio along with providing mutual fund research to clients for past 3 years. He has previously worked with - Concept Investwell, Kamayakya & Investeek
        "
        socials={chiragSocials}
        direction="left"
      />
    </div>
  );
}

