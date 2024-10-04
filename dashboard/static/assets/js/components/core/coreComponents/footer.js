import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";


export const Footer = () => {
  const footer_social_links = [
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
      link: "mailto:contact@scoopinvestment.com",
    },
  ];
  const Our_Services = [
    "Saving and Strategy",
    "Life & Health Insurance",
    "Banking and Financial",
    "Retirement Planning",
    "Home and Business Loan",
    "Business Consultation",
  ];
  const Important_Links = [
    "Home",
    "About",
    "Products",
    "Payment",
    "Newsletter",
    "Testimonial",
    "Privacy",
  ];
  return (
    <footer className="bg-gray-100 py-10 px-6 w-full">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-5 px-10">
        {/* Company Info Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Finance Company</h2>
          <p className="text-gray-600 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-1/2 max-md:w-full max-md:mb-3 border-b-2 border-gray-600 font-medium text-gray-600 bg-transparent py-2 mr-4 focus:outline-none"
            style={{ letterSpacing: "1px" }}
          />
          <button
            className="max-md:w-full bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition duration-300"
            style={{ letterSpacing: "1px" }}
          >
            Subscribe
          </button>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Our Services</h2>
          <ul className="space-y-2">
            {Our_Services.map((label, index) => {
              return (
                <li className="text-gray-600" key={index}>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Important Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Important Links</h2>
          <ul className="space-y-2">
            {Important_Links.map((label, index) => {
              return (
                <li className="text-gray-600" key={index}>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Contact</h2>
          <ul className="space-y-2">
            <li className="text-gray-600 flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9101/9101314.png"
                alt=""
                className="w-7 h-7 mr-5"
              />
              123 Main ST #4545, <br /> Herndon VA 22071-2716.
            </li>
            <li className="text-gray-600 flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/15474/15474140.png"
                alt=""
                className="w-7 h-7 mr-5"
              />
              +123-456-7890
            </li>
            <li className="text-gray-600 flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3059/3059989.png"
                alt=""
                className="w-7 h-7 mr-5"
              />
              riponpalbg@gmail.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-10">
            <a
              href="#"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
            >
              <FaFacebookF className="hover:text-black text-green-500 h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
            >
              <FaInstagram className="hover:text-black text-green-500 h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
            >
              <FaTwitter className="hover:text-black text-green-500 h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
            >
              <FaLinkedinIn className="hover:text-black text-green-500 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
