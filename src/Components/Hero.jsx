import React from "react";
import Container from "../Components/Container";
import { GoCopy } from "react-icons/go";

const Hero = () => {
  return (
    <div className="">
      <Container>
        <div className="container px-5 lg:py-[120px]">
          <h6 className="text-[16px] pb-5 lg:text-xl text-gray-500">
            Hi, I’m Joseph.
          </h6>
          <p className="text-[24px] lg:text-6xl font-bold pb-4">
            A <span className="text-teal-700">Product</span> Designer,{" "}
            <span className="text-orange-700">Strategic</span> Thinker, and
            Creative Problem Solver
          </p>
          <p className="text-xl max-w-6xl text-gray-600 pb-5">
            With 3 years+ of product design experience, I turn complex problems
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
