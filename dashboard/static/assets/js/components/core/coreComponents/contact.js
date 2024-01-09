import React from "react";
import { TabTitle } from "../scripts/general_function";
import { ContactHead } from "./contact/contactHead";
import { ContactInfo } from "./contact/contactInfo";
import { ContactForm } from "./contact/contactForm";
import { Footer } from "./footer";

import "../../../../../css/contact.css";

export function Contact() {
  TabTitle("YC | Contact");
  return (
    <>
      <ContactHead />
      <div className="d-flex flex-column p-sm-4 p-2 
            justify-content-end align-items-center">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </>
  );
}
