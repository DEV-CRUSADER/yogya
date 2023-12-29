import React from "react";

export function ContactInfo() {
  return (
    <>
      <div className="contact-info w-100 w-md-25 w-lg-25">
        <div className="hero-info fs-3">
          <a href="tel:+91-7567473055" className="hover-effect text-decoration-none contact-color p-4">
          <i className={`fa-solid fa-phone `}></i> This is my Phone Number
          </a>
        </div>
        <div className="hero-info fs-3 mt-4">
          <a href="https://wa.me/917567473055" className="hover-effect  text-decoration-none contact-color p-4">
          <i className={`fa-brands fa-whatsapp `}></i> This is my Whatsapp
          </a>
        </div>
        <div className="hero-info fs-3 mt-4">
          <a href="mailto:chiragjain@yahoo.com" className="hover-effect text-decoration-none contact-color p-4">
          <i className={`fa-solid fa-envelope `}></i> This is my Gmail
          </a>
        </div>
      </div>
    </>
  );
}
