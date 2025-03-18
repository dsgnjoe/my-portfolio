import React from "react";
import Container from "../Components/Container";
import { GoCopy } from "react-icons/go";

const Hero = () => {
  return (
    <div className="mb-8 md:mb-0">
      <Container>
        <div className="container px-3 py-5 lg:py-[120px] ">
          <h6 className="text-base pb-3 lg:pb-5 lg:text-xl text-gray-500">
            Hi, I’m Joseph.
          </h6>
          <p className="text-[28px] md:text-6xl font-bold pb-4">
            A Product <span className="text-orange-700"> Designer</span>,{" "}
            Strategic <span className="text-black">Thinker</span>, and Creative
            Problem Solver
          </p>
          <p className="text-base md:text-xl max-w-6xl text-gray-600 pb-5">
            With 3+ years of product design experience, I turn complex problems
            into intuitive and engaging digital experiences that not only
            work—but wow. Every pixel and interaction is crafted to connect with
            users while driving real value and transformation for businesses.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full flex items-center gap-3">
            <GoCopy /> Copy Email
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
