import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { RiMessage3Line } from "react-icons/ri";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

import hubtelImg from "/images/hubtel-logo.svg";
import dataware from "/images/dataware.svg";
import brolly from "/images/brolly.svg";
import bitafrika from "/images/bitafrika.svg";
import kriblinkLogo from "/images/kriblink-logo.svg";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const email = "kwabenaadofo330@gmail.com";

  const copyEmail = async (e) => {
    e.preventDefault(); // Prevent default link behavior

    try {
      await navigator.clipboard.writeText(email);

      // Trigger success state
      setCopied(true);
      setIsAnimating(true);

      // Reset after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);

      // Reset animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    } catch (err) {
      // Fallback for older browsers
      fallbackCopyTextToClipboard(email);
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setIsAnimating(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    } catch (err) {
      console.error("Failed to copy email", err);
    }

    document.body.removeChild(textArea);
  };
  return (
    <div className="mb-8 md:mb-0">
      <div className="mx-auto max-w-[1100px] bg-white mt-6 rounded-3xl relative overflow-hidden">
        <Navbar />
        <div className="p-4 md:p-5">
          <div className="lg:container md:px-3 py-5 lg:py-[30px] lg:pb-[20px]">
            <div className="mx-auto max-w-[860px]">
              <h1 className="text-[24px] md:text-4xl mb-6 font-bold">
                <span className="text-[#525866] font-fraunces">
                  {" "}
                  I'm Joseph.{" "}
                </span>{" "}
                Product Designer
              </h1>
              <p className="text-[#525866] mb-2 text-lg font-light">
                A product designer with 3+ years of experience designing
                human-focused solutions across insurance, fintech, data
                analytics, B2B SaaS, and internal tools. I apply data and
                insight to create experiences that help people make better
                decisions and work more efficiently.
              </p>
              <p className="text-[#525866] mb-2 text-lg font-light">
                Currently at Hubtel, I’m designing across internal and
                customer-facing tools to improve operational workflows, enhance
                security, and make digital transactions easier for businesses
                and their users.{" "}
              </p>
              <p className="text-[#525866] mb-2 text-lg font-light">
                I’m looking for a role where I can lead product thinking,
                support design strategy, and contribute to a strong,
                user-focused design culture. I’m excited to work with teams that
                value ownership, fast collaboration, and building products that
                truly matter.
              </p>
              <div className="mt-8 lg:my-8 flex flex-col lg:flex-row gap-5 lg:items-end">
                <div className="lg:pe-8 lg:border-r border-[#E2E4E9] order-last lg:order-first">
                  <p className="text-gray-400 text-center lg:text-left  text-[14px] mb-2">
                    Companies I have worked with
                  </p>
                  <div className="">
                    <div className="flex justify-center lg:justify-around items-center gap-7 flex-wrap">
                      <img
                        src={hubtelImg}
                        alt=""
                        className="w-[53px] lg:w-auto h-auto object-cover"
                      />
                      <img
                        src={dataware}
                        alt=""
                        className="w-[53px] lg:w-auto h-auto object-cover"
                      />
                      <img
                        src={bitafrika}
                        alt=""
                        className="w-[53px] lg:w-auto h-auto object-cover"
                      />
                      <img
                        src={brolly}
                        alt=""
                        className="w-[53px] lg:w-auto h-auto object-cover"
                      />
                      <img
                        src={kriblinkLogo}
                        alt=""
                        className="w-[53px] lg:w-auto h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-first lg:order-last w-full lg:w-fit mb-5 lg:mb-0 lg:ps-6">
                  <div className="hidden lg:block">
                    <button
                      onClick={copyEmail}
                      className={`px-5 py-3 mx-auto transition-all bg-[#C2540A] hover:bg-[#904d20] text-white rounded-xl flex items-center gap-2 w-fit relative overflow-hidden ${
                        isAnimating ? "animate-pulse" : ""
                      }`}
                    >
                      <IoCopyOutline className="text-white" />
                      <span
                        className={`transition-opacity duration-300 ${
                          copied ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        Copy my email
                      </span>

                      <div
                        className={`absolute inset-0 bg-green-600 flex items-center justify-center gap-2 text-white transform transition-transform duration-300 ${
                          copied ? "translate-y-0" : "translate-y-full"
                        }`}
                      >
                        <IoCheckmarkOutline
                          className={`text-white ${
                            copied ? "animate-bounce" : ""
                          }`}
                        />
                        Copied!
                      </div>
                    </button>
                  </div>
                  <div className="lg:hidden block">
                    <a
                      href="mailto:kwabenaadofo330@gmail.com"
                      target="_blank"
                      className="px-5 py-3 mx-auto transition-all bg-[#C2540A] hover:bg-[#904d20] text-white rounded-xl flex items-center gap-2 w-fit "
                    >
                      <RiMessage3Line className="text-white" /> Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
