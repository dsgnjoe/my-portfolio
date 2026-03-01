import React from "react";
import Container from "../Components/Container";
import { MdArrowOutward } from "react-icons/md";
import BettaUICoverImage from "/images/svg/bettaui.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { div } from "motion/react-client";
import { Link } from "react-router";

function BettaUI() {
  const details = [
    { label: "Role", value: "Product Designer" },
    { label: "Tools", value: "Figma, Notion" },
    { label: "Project Duration", value: "4 Weeks" },
  ];

  return (
    <div className="my-10">
      <Container className="mb-5">
        <div className="lg:container py-5 md:px-3 mx-auto">
          <a
            href="/"
            className="text-sm mb-10 flex items-center justify-start gap-1"
          >
            <MdKeyboardArrowLeft />
            <span>Return to home</span>
          </a>
          <h1 className="text-[28px] md:text-[40px] mb-8 leading-snug">
            Betta UI, a simple design system for designers
          </h1>

          <img
            className="w-full h-auto md:h-full max-h-[456px] object-contain md:object-cover rounded-xl md:rounded-3xl mb-10"
            src={BettaUICoverImage}
            alt="cover-image"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {details.map((detail, index) => (
              <div key={index}>
                <h6 className="text-[#868C98] text-sm md:text-base">
                  {detail.label}
                </h6>
                <h5 className="text-[#525866] text-base md:text-base lg:text-lg ">
                  {detail.value}
                </h5>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h1 className="text-[24px] md:text-3xl mb-4 lg:mb-5 font-light">
              Background
            </h1>
            <p className="text-[#525866] text-base lg:text-lg  font-light">
              Betta UI is my attempt to build a practical, scalable design
              system from the ground up — not just to use one, but to understand
              how to create and manage one effectively. Working across insurance
              products and internal tools, I’ve seen how quickly products grow
              while design systems fall behind. Components get recreated,
              spacing becomes inconsistent, and decisions live in people’s heads
              instead of documentation. Over time, scalability becomes a
              challenge. As a designer who understands frontend implementation,
              I began asking: What does it truly take to build and manage a
              scalable design system from first principles? Betta UI is my way
              of finding that answer through hands-on experience.{" "}
            </p>
          </div>

          <div className="mb-10 bg-[#EBF1FF] p-8 rounded-2xl">
            <p className="text-[#525866] text-base lg:text-lg ">
              I’m excited to share more details about this project once I have
              pulled together all the key parts from research and design
              thinking to the final results, I will walk through how we tackled
              the problem, what we learned, and the impact we made. I am excited
              to share the story behind it.
            </p>
            <p className="text-[#525866] text-base lg:text-lg  mt-4 mb-0">
              Last Updated: <span className="text-dark">20 Nov, 2025</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-10">
            <Link
              to={"/kriblink"}
              className="text-white bg-black rounded-xl flex items-center justify-center gap-2  px-3.5 py-3.5  text-[14px]"
            >
              View Next Case Study
              <MdKeyboardArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BettaUI;
