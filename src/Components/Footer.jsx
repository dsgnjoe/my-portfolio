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
              <a
                href="https://drive.google.com/file/d/1Uezx2LXyztz483zrjNpfOCBI0I81EhE-/view?usp=drive_link"
                target="_blank"
                className="text-[#525866] hover:text-gray-400"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/josephadofo/"
                target="_blank"
                className="text-[#525866] hover:text-gray-400 flex items-center gap-2"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/kwabenaadofo"
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
