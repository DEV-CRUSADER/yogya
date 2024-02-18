import React from "react";
import {
  BrowserRouter as BrowserRouter,
  HashRouter,
  Route,
  Link,
} from "react-router-dom";

// Icons
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";

import { Logo } from "../../common/utils/logo";

import "../../../../../css/footer.css";

export function Footer() {

  const footer_social_links =[
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/chirag-jain-16334483/",
    },
    {
      Icon: BsSubstack,
      link: "https://x.com/Chiragjain1097",
    },
    {
      Icon: FaRegEnvelope,
      link: "mailto:invest@yogyacapital.com"
    }
  ]


  return (
    <div className="section">
      <div
        className="container-fluid p-0"
        style={{
          color: "var(--main-color)",
        }}
      >
        <div className="d-flex justify-content-center ">
          {
            footer_social_links.map((social, index) => {
              return (
                <SocialLink Icon={social.Icon} link={social.link}/>
              );
            })
          }
        </div>
        <div className="text-center">
          <span className="fs-6">
            2004-2005 Arihant Market, Ring road, Surat, Gujarat
          </span>
        </div>
        <div className="text-center mt-1 d-flex justify-content-center">
          <div className="pe-1">
            <a>
              <FaPhoneAlt />
              <span className="ps-1">+91 75674 73055</span>
            </a>
          </div>
          <div className="ps-1">
            <a>
              <FaRegEnvelope />
              <span className="ps-1">invest@yogyacapital.com</span>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <Logo />
        </div>
        <div
          className="py-1 d-flex justify-content-around"
          style={{
            background: "var(--teritary-color)",
          }}
        >
          <span className="bottom-footer">www.yogyacapital.com &copy;&nbsp;copyright 2024</span>
          <span className="bottom-footer">Privacy policy | T&C</span>
        </div>
      </div>
    </div>
  );
}


function SocialLink({ Icon, link }) {
  return (
    <Link 
      className="m-2"
      to={link}
      target="_blank"
    >
      <Icon
        className="fs-4 p-2 rounded-circle hover-effect"
        style={{
          background: "var(--main-color)",
          width: "35px",
          height: "35px",
          fill: "var(--secondary-color)",
        }}
      />
    </Link>
  );
}
