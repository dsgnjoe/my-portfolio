import React from "react";
import { MdArrowOutward } from "react-icons/md";
import kriblink from "/images/Kriblink.png";
import citizen from "/images/Citizen.png";
import thriftfinder from "/images/thriftfinder.svg";
import { motion } from "motion/react";
import Container from "./Container";

const MyProjects = () => {
  return (
    <div className="container px-5 mx-auto pb-20" id="works">
      <Container>
        <div className="grid grid-cols-2 gap-10">
          {/* first project */}
          <div className="bg-[#C2D6FF] flex flex-col gap-3 rounded-2xl border-4 border-[#EBF1FF]">
            <div className="flex flex-col gap-2 p-6">
              <p className="text-base text-[#162664]">ThriftFinder</p>
              <p className="text-2xl font-semibold">
                Making Instagram Shop Discovery Easier With ThriftFinder
              </p>
            </div>
            <div className="px-6 flex-1 flex justify-center">
              <img
                src={thriftfinder}
                alt="cover image"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* second project */}
          <div className="bg-[#FFDAC2] rounded-2xl border-4 border-[#FEF3EB]">
            <div className="flex flex-col gap-2 p-6">
              <p className="text-base text-[#6E330C]">Kriblink</p>
              <p className="text-2xl font-semibold">
                Simplifying Off-Campus Housing for Students (Wins, Struggles,
                and Lessons)
              </p>
            </div>
            <div className="px-6 pt-3 pb-6">
              <img
                src={thriftfinder}
                alt="cover image"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* third project */}
          <div className="bg-[#CBF5E5] rounded-2xl border-4 border-[#EFFAF6]">
            <div className="flex flex-col gap-2 p-6">
              <p className="text-base text-[#176448]">EasySell</p>
              <p className="text-2xl font-semibold">
                Simplifying Off-Campus Housing for Students (Wins, Struggles,
                and Lessons)
              </p>
            </div>
            <div className="px-6 pt-3 pb-6">
              <img
                src={thriftfinder}
                alt="cover image"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* fourth project */}
          <div className="bg-[#C2EFFF] rounded-2xl border-4 border-[#EBFAFF]">
            <div className="flex flex-col gap-2 p-6">
              <p className="text-base text-[#164564]">Kriblink</p>
              <p className="text-2xl font-semibold">
                Simplifying Off-Campus Housing for Students (Wins, Struggles,
                and Lessons)
              </p>
            </div>
            <div className="px-6 pt-3 pb-6">
              <img
                src={thriftfinder}
                alt="cover image"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-20 mb-8 md:m-20">
          {/* first project */}
          <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
              <div className="bg-[#EBF1FF] p-6 lg:p-14 lg:w-3/4 rounded-lg">
                <img
                  src={thriftfinder}
                  alt="cover image"
                  className="rounded-lg transform transition duration-500 hover:scale-105"
                />
              </div>
              <div className="col-span-2 px-0 py-4 lg:p-4 lg:w-1/2">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEBFF] w-fit">
                    Mobile App
                  </div>
                  <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#EFFAF6] w-fit">
                    Design
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl md:text-[40px] font-bold pb-3">
                    ThriftFinder
                  </h4>
                  <p className="text-sm md:text-base text-[#525866]  pb-3 md:pb-12">
                    A mobile application enhancing the shopping experience by
                    curating Instagram shops. Users discover, add, and review
                    shops, fostering a community-driven platform for shopping
                    enthusiasts.
                  </p>

                  {/* <button className="border border-black rounded-full px-4 py-3 text-center  flex items-center gap-2">
                  <a
                    href="/thrift-finder"
                    target=""
                    className="text-black font-medium flex items-center gap-2  "
                  >
                    Visit Case Study
                    <MdArrowOutward />
                  </a>
                </button> */}
                  <a
                    href="/thrift-finder"
                    target=""
                    className="text-black font-medium flex items-center gap-2 hover:text-gray-700"
                  >
                    Visit Case Study
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* second project */}
          <div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
              <div className="col-span-2 px-0 py-4 lg:p-4 lg:w-1/2 ">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEBFF] w-fit">
                    Web App
                  </div>
                  <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#EFFAF6] w-fit">
                    Design
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl md:text-[40px] font-bold pb-3">
                    CitizenApp Website
                  </h4>
                  <p className="text-sm md:text-base text-[#525866]  pb-3 md:pb-12">
                    This app connects you to official public notices from all
                    arms and institutions of government. The CitizenApp connects
                    all your interactions with the government into one seamless
                    digital experience.
                  </p>

                  <a
                    href="https://www.citizen.gov.gh/"
                    target="_blank"
                    className="text-black font-medium flex items-center gap-2  hover:text-gray-700"
                  >
                    Visit Project
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
              <div className="bg-[#FFE8A4] p-6 lg:p-14 lg:w-3/4 rounded-lg">
                <img
                  src={citizen}
                  alt="cover image"
                  className="rounded-lg transform transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* third project */}
          <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
              <div className="bg-[#ffdcc2] p-6 lg:p-14 lg:w-3/4 rounded-lg ">
                <img
                  src={kriblink}
                  alt=""
                  className="rounded-lg transform transition duration-500 hover:scale-105"
                />
              </div>

              <div className="col-span-2 px-0 py-4 lg:p-4 lg:w-1/2">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEBFF] w-fit">
                    Case Study
                  </div>
                  <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#EFFAF6] w-fit">
                    Web App
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl md:text-[40px] font-bold pb-3">
                    Kriblink
                  </h4>
                  <p className="text-sm md:text-base text-[#525866]  pb-3 md:pb-12">
                    A platform that helps students easily find safe, affordable,
                    and convenient off-campus accommodation with verified
                    listings and smart search tools.
                  </p>

                  {/* <a
                  href="/kriblink"
                  className="text-black font-medium flex items-center gap-2"
                >
                  View Prototype
                  <MdArrowOutward />
                </a> */}
                  <p className="text-black font-medium">Coming Soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F8FA] border border-[#E2E4E9] rounded-lg p-7 flex flex-col items-center">
          <p className="text-[20px] lg:text-2xl text-center font-medium lg:mx-48  mb-3 md:mb-4">
            My design philosophy is rooted in empathy and a deep understanding
            of the end user.
          </p>

          <button
            className="bg-black text-white rounded-full px-5 py-3 text-center flex items-center gap-2"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/josephadofo/", "_blank");
            }}
          >
            Let's connect
            <MdArrowOutward />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default MyProjects;
