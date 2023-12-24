import React from "react";

//importing css
import { CSS } from "../../../../../../css/home.css";

export function Disclaimer() {
  return (
    <>
      <div className="hero-section-4 m-4 p-4">
        <section className="container text-center">
          <p className="span-0 my-2 fs-1">DISCLAIMER</p>
          <p className="span-1 mb-2">
            Website .com an online website of Chirag R Jain who is registered
            vide ARN-187955 as a AMFI Registered Mutual Fund Distributor.
            <p className="span-2  mt-2">
              Yogya capital makes no warranties or representations. express or
              implied. on products offered through the platform. It accepts no
              liability for any damages or losses, however caused, in connection
              with the use of, or on the reliance of its product or related
              services Unless otherwise specified, all returns, expense ratio,
              NAV, etc are historical and for illustrative purposes only. Future
              will vary greatly and depends on personal and market
              circumstances. The information provided by our blog is educational
              only and is not investment or tax advice.
            </p>
            <p className="span-2">
              Mutual fund investment are subject to market risk. Please read a
              scheme recieo documents carefully before investing. Past
              performance of the schemes is neither an indicator nor a quarantee
              of future performance. Terms and conditions of the website app are
              applicable. Privacy policy of the website is applicable.
            </p>
          </p>
        </section>
      </div>
    </>
  );
}
