import React from "react";
import { TabTitle } from "../scripts/general_function";
import CSS from "../../../../../css/contact.css";
import { ContactHead } from "./contact/contactHead";
import { ContactInfo } from "./contact/contactInfo";
import { ContactForm } from "./contact/contactForm";


export function Contact() {
    TabTitle('Yogya Capital | Contact')
    return (
        <>
            <ContactHead/>
            <ContactInfo/>
            <ContactForm/>
            <h1>Contact ME resbase</h1> 
        </>
    );
}