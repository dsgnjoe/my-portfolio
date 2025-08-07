import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import {
  FaBars,
  FaLinkedin,
  FaBehance,
  FaTimes,
  FaFile,
  FaFileAlt,
} from "react-icons/fa";

import logo from "/images/joe-img.png";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener with cleanup
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <nav className="bg-white p-4 md:p-5 w-full border-b border-gray-100">
        <div className="">
          <div className="flex justify-between items-center">
            <a href="/" className="">
              <img src={logo} alt="" className="w-10 h-10 rounded-full" />
            </a>
            <div className="block lg:hidden">
              <button
                onClick={toggleSidebar}
                className="w-10 h-10 bg-black text-white flex justify-center items-center rounded-xl focus:outline-none"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            <ul className="hidden lg:flex items-center space-x-10">
              <li>
                <a
                  href="https://drive.google.com/file/d/1Uezx2LXyztz483zrjNpfOCBI0I81EhE-/view?usp=drive_link"
                  target="_blank"
                  className="text-black hover:text-gray-600"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/josephadofo/"
                  target="_blank"
                  className="text-black hover:text-gray-600 text-base flex items-center gap-2"
                >
                  {/* <FaLinkedin /> */}
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/onlyjoex"
                  target="_blank"
                  className="text-black hover:text-gray-600 text-base flex items-center gap-2"
                >
                  {/* <FaLinkedin /> */}
                  X (Twitter)
                </a>
              </li>

           
            </ul>
          </div>
          {/* Mobile Nav */}

          {isOpen && (
            <div className="lg:hidden w-full bg-white z-50 flex flex-col transition-all ease-in-out">
              <ul
                className="space-y-6 md:space-y-14
           flex flex-col items-center justify-center h-full w-full"
              >
                <li>
                  <a
                    href="https://www.linkedin.com/in/josephadofo/"
                    className="text-[#525866] text-lg md:text-2xl hover:text-gray-400"
                    onClick={toggleSidebar}
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/josephadofo/"
                    className="text-[#525866] text-lg md:text-2xl hover:text-gray-400"
                    onClick={toggleSidebar}
                  >
                    LinkedIn
                  </a>
                </li>

                <li className="w-full">
                  <a
                    href="mailto:kwabenaadofo330@gmail.com"
                    target="_blank"
                    className="text-white bg-black rounded-lg  px-3.5 py-3.5 w-full  text-[14px] hidden"
                  >
                    Get In Touch
                  </a>
                  <button className="text-white bg-black rounded-lg  px-3.5 py-3.5 w-full  text-[14px]">
                    Get In Touch
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
