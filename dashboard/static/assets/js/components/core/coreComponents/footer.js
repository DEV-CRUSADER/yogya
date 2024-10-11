import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
// import { BsSubstack } from "react-icons/bs";

export const Footer = () => {
  const Our_Services = [
    {
      label: "Saving and Strategy",
      to: "#",
    },
    {
      label: "Life & Health Insurance",
      to: "#",
    },
    {
      label: "Banking and Financial",
      to: "#",
    },
    {
      label: "Retirement Planning",
      to: "#",
    },
    {
      label: "Home and Business Loan",
      to: "#",
    },
    {
      label: "Business Consultation",
      to: "#",
    },
  ];

  const Important_Links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Newsletter",
      to: "/newsletter",
    },
    {
      label: "Testimonial",
      to: "/testimonial",
    },
    {
      label: "Privacy",
      to: "/privacy",
    },
  ];

  const social_icons = [
    {
      label: "Facebook",
      to: "https://facebook.com",
      Icon: <FaFacebookF className="text-green-500 h-5 w-5" />,
    },
    {
      label: "Instagram",
      to: "https://instagram.com",
      Icon: <FaInstagram className="text-green-500 h-5 w-5" />,
    },
    {
      label: "Twitter",
      to: "https://twitter.com",
      Icon: <FaTwitter className="text-green-500 h-5 w-5" />,
    },
    {
      label: "Linkedin",
      to: "https://linkedin.com",
      Icon: <FaLinkedinIn className="text-green-500 h-5 w-5" />,
    },
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
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Our Services</h2>
          <ul className="space-y-2">
            {Our_Services.map((item, idx) => (
              <li
                className="text-gray-600 hover:underline "
                key={`link-${idx}`}
              >
                <Link to={item.to} target="_blank">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Important Links</h2>
          <ul className="space-y-3">
            {Important_Links.map((item, idx) => (
              <li
                className="text-gray-600 hover:underline w-fit"
                key={`link-${idx}`}
              >
                <Link to={item.to} target="_blank">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Contact</h2>
          <ul className="space-y-4 ">
            <li className="text-gray-600 flex items-center gap-2">
              <FaLocationDot className="h-5 w-5 " />
              <span>
              G-17 Shyam Plaza, VIP Road,<br/>Vesu, Surat, Gujarat - 395007
              </span>
            </li>
            <li className="text-gray-600 flex items-center gap-2">
              <FaPhoneAlt className="h-5 w-5 " />
              <span>+91 75674 73055</span>
            </li>
            <li className="text-gray-600 flex items-center gap-2">
              <MdEmail className="h-5 w-5 " />
              <span>contact@scoopinvestment.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-10">
           
            {social_icons.map((item, index) => {
              return (
                <Link
                  to={item.to}
                  key={index}
                  className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-400"
                  target="_blank"
                >
                  {item.Icon} {/* Corrected to `Icon` */}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
