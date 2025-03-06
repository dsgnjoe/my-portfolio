import React from "react";
import Container from "../Components/Container";
import logo from "/images/logo.svg";
const Footer = () => {
  return (
    <div>
      <Container>
        <nav className=" bg-white px-4 py-6 w-full">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="" />
            </a>

            <ul className="hidden lg:flex items-center space-x-10">
              <li>
                <a
                  href="https://drive.google.com/file/d/1Uezx2LXyztz483zrjNpfOCBI0I81EhE-/view?usp=drive_link"
                  target="_blank"
                  className="text-[#525866] hover:text-gray-400"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/josephadofo/"
                  target="_blank"
                  className="text-[#525866] hover:text-gray-400 flex items-center gap-2"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Footer;
