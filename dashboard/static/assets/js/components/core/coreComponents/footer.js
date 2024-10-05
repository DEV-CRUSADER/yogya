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

export const Footer = () => {
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
    <footer className="bg-gray-100 py-10 mt-10 px-6 w-full">
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
            {Our_Services.map((label, idx) => (
              <li
                className="text-gray-600 hover:underline"
                key={`service-${idx}`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Important Links</h2>
          <ul className="space-y-2">
            {Important_Links.map((label, idx) => (
              <li className="text-gray-600" key={`link-${idx}`}>
                {label}
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
                123 Main ST #4545, <br /> Herndon VA 22071-2716.
              </span>
            </li>
            <li className="text-gray-600 flex items-center gap-2">
              <FaPhoneAlt className="h-5 w-5 " />
              <span>+123-456-7890</span>
            </li>
            <li className="text-gray-600 flex items-center gap-2">
              <MdEmail className="h-5 w-5 " />
              <span> riponpalbg@gmail.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-10">
            <a
              href="https://facebook.com"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className=" text-green-500 h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" text-green-500 h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className=" text-green-500 h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className=" text-green-500 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
