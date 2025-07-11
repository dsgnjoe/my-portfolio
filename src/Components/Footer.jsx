import React from "react";
import Container from "../Components/Container";
import logo from "/images/logo.svg";
import footerBgPattern from "/images/footerBg.png";
import { RiMessage3Line } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <div>
      <footer className="mx-auto max-w-[1100px] p-4 md:p-5 bg-[#2B1664] text-white my-6 rounded-3xl relative overflow-hidden">
        <img
          src={footerBgPattern}
          alt=""
          className="absolute top-0 left-0 right-0 w-full z-0"
        />

        <div className="container mx-auto mt-[80px] mb-[15px]">
          <div>
            <h1 className="text-[24px] md:text-4xl text-center">
              Have a project in mind? I’m always open to{" "}
              <br className="hidden lg:block" /> meaningful collaborations and
              exciting challenges.
            </h1>
            <div className="text-center mt-8 mb-8">
              <a
                href="mailto:kwabenaadofo330@gmail.com"
                target="_blank"
                className="px-5 py-3 mx-auto transition-all bg-white hover:bg-purple-100 text-black rounded-xl flex items-center gap-2 w-fit"
              >
                <RiMessage3Line className="text-black" /> Get in Touch
              </a>
            </div>
            <ul className="flex justify-between items-center border-t pt-5 w-full lg:max-w-[460px] mx-auto border-[#5A36BF]">
              <p
                className="text-[14px] flex items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <FaArrowUp />
                Back To Top
              </p>

              <div className="flex items-center gap-4">
                <a href="https://x.com/onlyjoex" target="_blank">
                  <FaXTwitter className="text-[14px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/josephadofo/"
                  target="_blank"
                >
                  <LuLinkedin className="text-[14px]" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
