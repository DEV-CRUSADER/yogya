import React from "react";
import { TabTitle } from "../scripts/general_function";
import { ContactForm } from "./contactComponets";
import { Footer } from "./footer";

import "../../../../../css/contact.css";

export function Contact() {
  TabTitle("Scoop Investment | Contact");

  document.body.style.overflowY = "auto";

  return (
    <main>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.211170467313!2d72.79618495544288!3d21.14399288623573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053006f210df9%3A0xdaca865c4c6d696f!2sShyam%20Plaza%20-%20Arham%20Grpup!5e0!3m2!1sen!2sin!4v1728678959923!5m2!1sen!2sin"
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="mt-3 flex flex-col justify-center items-center">
              <h5>Get in touch</h5>
              <h1>CONTACT</h1>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}