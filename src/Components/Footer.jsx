import React from "react";
import { FaBars, FaLinkedin, FaBehance, FaTimes } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import logo from "../images/logo.png";
const Footer = () => {
  return (
    <div>
      <nav className="border-t border-gray-200 bg-white p-10 w-full">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-8">
          <a href="/" className="text-white text-2xl font-bold">
            <img src={logo} alt="" />
          </a>
          <ul className="flex flex-col md:flex-row items-center gap-8">
            <li>
              <a href="#about" className="text-[#525866] hover:text-gray-400">
                Resume
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-[#525866] hover:text-gray-400 flex items-center gap-2"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#525866] hover:text-gray-400 flex items-center gap-2"
              >
                <FaBehance />
                Behance
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
