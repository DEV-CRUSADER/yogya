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
      <div className="d-flex flex-column p-sm-4 p-2 
            justify-content-end align-items-center">
        {/* <div
          className="d-none d-md-none d-lg-block d-xl-block d-xxl-block"
          style={{
            margin: "0 100px",
            border: "1.5px solid black",
            height: "300px",
          }}
        /> */}
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}
