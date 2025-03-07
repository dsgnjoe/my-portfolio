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

          {/* fifth project */}
          <div>
            <motion.div
              className="relative  rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.0 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#C2D6FF]/70 flex flex-col items-start justify-center text-white opacity-0 backdrop-blur-lg p-6 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-[#253EA7]">ThriftFinder</p>
                    <h3 className="text-2xl font-semibold text-black">
                      Making Instagram Shop Discovery Easier With ThriftFinder
                    </h3>
                  </div>
                  <a
                    href={"#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
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
            </motion.div>
          </div>
        </div>

        <div className="bg-[#F6F8FA] border border-[#E2E4E9] rounded-lg p-10 flex flex-col items-center mt-20">
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
