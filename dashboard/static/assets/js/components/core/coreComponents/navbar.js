import React, { useState, useRef, useEffect } from "react";
import { FaHome, FaBlog, FaPhone } from "react-icons/fa"; // Import icons
import { Link, useLocation } from "react-router-dom"; // Correct import for useLocation
import { TabTitle } from "../scripts/general_function";
import { GrResources } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { FaTimes, FaBars } from "react-icons/fa";

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
      TabTitle("Scoop Investment | Resources");
    } else if (currentLocation.pathname === "/contact") {
      TabTitle("Scoop Investment | Contact");
    }
  }, [currentLocation]);

  const nav_links = [
    {
      to: "/",
      label: "Home",
      Icon: <FaHome className="h-5 w-5" />,
    },
    {
      to: "/resources",
      label: "Resources",
      Icon: <GrResources className="h-5 w-5" />,
    },
    {
      to: "https://scoopinvestment.substack.com",
      label: "Blog",
      Icon: <FaBlog className="h-5 w-5" />,
    },
    {
      to: "/contact",
      label: "Contact Us",
      Icon: <IoMdContact className="h-5 w-5" />,
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
            className="text-white focus:outline-none transform transition-transform duration-300 ease-in-out"
          >
            {isOpen ? (
              // Close Icon when menu is open
              <FaTimes className="h-7 w-7" />
            ) : (
              // Hamburger Icon when menu is closed
              <FaBars className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Menu for Desktop */}
        <div className="hidden md:flex space-x-4 items-center no-underline gap-3">
          {nav_links.map((item) => (
            <Link
              key={item.label}
              className={`flex gap-2  text-white nav-link custom-nav-link text-decoration-none text-dark
                ${currentLocation.pathname === item.to ? "active_tab" : ""}`}
              to={item.to}
              onClick={handleLinkClick}
              target={item.to.startsWith("http") ? "_blank" : ""}
            >
              {item.Icon}
              <span>{item.label}</span>
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
        <div className="text-white text-xl font-bold">
          <Link to="/">Company Logo</Link>
        </div>
        {nav_links.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="text-white flex items-center space-x-5 p-2 rounded-md hover:bg-gray-700 transition-colors duration-300 hover:no-underline"
            onClick={handleLinkClick} // Close menu on link click
          >
            {item.Icon} {/* Display the icon */}
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Mobile Login Button */}
        <Link to="/login">
          <button className="absolute bottom-0 px-4 py-2 my-5 w-3/4 items-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
