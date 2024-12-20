import React from "react";
import { MdArrowOutward } from "react-icons/md";
import kriblink from "/images/Kriblink.png";
import citizen from "/images/Citizen.png";
import thriftfinder from "/images/ThriftFinder.png";
import { motion } from "motion/react";

const MyProjects = () => {
  return (
    <div className="container px-5 mx-auto pb-20" id="works">
      <h4 className="text-[20px] md:text-[40px] font-bold pb-6 md:pb-12">
        Featured Works
      </h4>

      {/* Projects */}
      <div className="flex flex-col gap-10 md:gap-20 mb-8 md:mb-20">
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
                  Web App
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

                <a
                  href="/thrift-finder"
                  target=""
                  className="text-black font-medium flex items-center gap-2 "
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
                  This app connects you to official public notices from all arms
                  and institutions of government. The CitizenApp connects all
                  your interactions with the government into one seamless
                  digital experience.
                </p>

                <a
                  href="https://www.citizen.gov.gh/"
                  target="_blank"
                  className="text-black font-medium flex items-center gap-2"
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
            {/* <div className="bg-[#ffdcc2] p-6 lg:p-12 lg:w-3/4 rounded-lg ">
              <motion.div
                whileHover={{ scale: 1.0 }} // Increases size for zoom effect
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ overflow: "hidden" }} // Ensures smooth zoom effect without overflow issues
              >
                <motion.img
                  src={kriblink}
                  alt=""
                  className="rounded-lg overflow-clip"
                  style={{ transformOrigin: "center" }} // Ensures zoom happens from the center
                  whileHover={{ scale: 1.2 }} // Adjust scale for hover zoom
                />
              </motion.div>
            </div> */}

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
                  and convenient off-campus accommodation with verified listings
                  and smart search tools.
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

      <div className="bg-[#F6F8FA] border border-[#E2E4E9] rounded-lg p-7">
        <p className="text-[20px] lg:text-[36px] text-center font-bold lg:mx-48  mb-3 md:mb-4">
          My design philosophy is rooted in empathy and a deep understanding of
          the end user.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <button
            className="border border-black bg-black rounded-full px-4 py-3 text-center text-white"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1Uezx2LXyztz483zrjNpfOCBI0I81EhE-/view?usp=drive_link",
                "_blank"
              );
            }}
          >
            See My Resume
          </button>
          <button
            className="border border-black rounded-full px-4 py-3 text-center  flex items-center gap-2"
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
      </div>
    </div>
  );
};

export default MyProjects;
