import React from "react";

//importing css
import { CSS } from "../../../../../../css/home.css";

export function Disclaimer() {
  return (
    <article>
      <section className="hero-section-4 m-0 mb-3 m-md-4 
        m-lg-4 m-xl-4 m-xxl-4 p-1 p-pd-4 p-lg-4 p-xl-4 p-xxl-4"
        data-aos="zoom-in"
      >
        <section className="container text-center">
          <p className="span-0 my-2 fs-1">DISCLAIMER</p>
          <p className="span-1 mb-2">
            yogyacapital.com an online website of Chirag R Jain who is registered
            vide ARN-187955 as a AMFI Registered Mutual Fund Distributor.
          </p>
          <span className="span-2">
            Mutual fund investment are subject to market risk. Please read a
            scheme recieo documents carefully before investing. Past
            performance of the schemes is neither an indicator nor a quarantee
            of future performance. Terms and conditions of the website app are
            applicable. Privacy policy of the website is applicable.
          </span>
        </section>
      </section>
    </article>
  );
}
