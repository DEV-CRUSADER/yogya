import React from "react";
import { TabTitle } from "../scripts/general_function";
import CSS from "../../../../../css/contact.css";
import { ContactHead } from "./contact/contactHead";
import { ContactInfo } from "./contact/contactInfo";
import { ContactForm } from "./contact/contactForm";

export function Contact() {
  TabTitle("YC | Contact");
  return (
    <>
      <ContactHead />
      <div className="d-flex flex-column-reverse p-sm-4 flex-md-column-reverse flex-lg-row flex-xl-row flex-xxl-row justify-content-center align-items-center  ">
        <ContactInfo />
        <div
          className="d-none d-md-none d-lg-block d-xl-block d-xxl-block"
          style={{
            margin: "0 100px",
            border: "1.5px solid black",
            height: "300px",
          }}
        />
        <ContactForm />
      </div>
    </>
  );
}
