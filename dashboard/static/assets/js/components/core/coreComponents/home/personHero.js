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
    },
  ];

  return (
    <div
      className="hero-section-2"
      style={{
        marginTop: "5rem",
      }}
    >
      <Profile
        image={chirag}
        name="Chirag Jain"
        description="Chirag Jain, a passionate about finance has cleared Level 3 of the CFA Program. He has been managing family portfolio along with providing mutual fund research to clients for past 3 years. He has previously worked with - Concept Investwell, Kamayakya & Investeek
        "
        socials={chiragSocials}
        direction="right"
      />
    </div>
  );
}
