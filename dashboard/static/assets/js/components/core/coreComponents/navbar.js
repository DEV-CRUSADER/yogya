import React, { useState, useRef, useEffect } from "react";
 // Import icons
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import { GrResources } from "react-icons/gr";
// Correct import for useLocation
import { Link, useLocation } from "react-router-dom"; 
import { TabTitle } from "../scripts/general_function";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu
  const buttonRef = useRef(null); // Ref for the hamburger/close button

  const currentLocation = useLocation();

  useEffect(() => {
    // Dynamically update the page title based on location
    if (currentLocation.pathname === "/") {
      TabTitle("Scoop Investment");
    } else if (currentLocation.pathname === "/resources") {
      TabTitle("SI | Resources");
    } else if (currentLocation.pathname === "/contact") {
      TabTitle("SI | Contact");
    }
  }, [currentLocation]);

  const nav_links = [
  {
      to: "/",
      label: "Home",
      icon: <FaHome />
    },
    // {
    //   to: "/resources",
    //   label: "Resources",
    //   icon: <GrResources />

    // },
    {
      to: "https://scoopinvestment.substack.com",
      label: "Blog",
      icon: <BsSubstack />
    },
    {
      to: "/contact",
      label: "Contact Us",
      icon: <FaPhoneAlt />
    },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on link click
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if clicked outside
  const closeMenu = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeMenu);
    } else {
      document.removeEventListener("mousedown", closeMenu);
    }

    // Cleanup listener on unmount or when isOpen changes
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isOpen]);


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="text-white text-xl font-bold">
          <Link to="/">Company Logo</Link>
        </div>

        {/* Toggle Menu Button for Mobile */}
        <div className="md:hidden z-20" ref={buttonRef}>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // Close Icon when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon when menu is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu for Desktop */}
        <div className="hidden md:flex space-x-4 items-center no-underline">
          {nav_links.map((link) => (
            <Link
              key={link.to}
              className={`text-white nav-link custom-nav-link text-decoration-none text-dark
                ${currentLocation.pathname === link.to ? "active_tab" : ""}`}
              to={link.to}
              onClick={handleLinkClick}
              target={link.to.startsWith("http") ? "_blank" : ""}
            >
              {link.label}
            </Link>
          ))}

          {/* Login Button */}
          <Link to="/login">
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-gray-800 z-10 flex flex-col p-6 space-y-8 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {nav_links.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="text-white flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-300 no-underline"
            onClick={handleLinkClick} // Close menu on link click
          >
            {item.icon} {/* Display the icon */}
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Mobile Login Button */}
        <Link to="/login">
          <button className="mt-12 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
