import React from "react";

import chirag from "../../../../../img/chirag.png";
import { Profile } from "./profile";

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
    }
    
  ]

  return (
    <div className="hero-section-2"
      style={{
        marginTop: "5rem",
      }}
    >
      <Profile
        image={chirag}
        name="Chirag Jain"
        description="Chirag Jain is a 3rd year student at IIT Roorkee. He is a full stack developer and has worked on multiple projects. He is also a competitive programmer and has a keen interest in finance."
        socials={chiragSocials}
        direction="right"
      />
    </div>
  );
}
