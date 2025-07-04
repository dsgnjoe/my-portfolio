import React from "react";
import { MdArrowOutward } from "react-icons/md";
import kriblink from "/images/kriblink/Kriblink.png";
import citizen from "/images/Citizen.png";
import thriftfinder from "/images/ThriftFinder.png";
import { motion } from "motion/react";
import Container from "./Container";
import { image, img } from "motion/react-client";
import { Link } from "react-router";

const MyProjects = () => {
  const projects = [
    {
      title: "Kriblink",
      image: kriblink,
      description:
        "Rethinking off-campus housing for 15,000+ non-resident students with verified listings, smart filters, and seamless booking, aiming to cut search time by 60% and build trust.",
      tagsArray: ["Housing", "Web App", "UX Research"],
      tags: "Housing, Web App, UX Research",
      link: "https://kriblink.com",
      caseStudyLink: "/kriblink",
    },
  ];
  const noCaseStudyProjects = [
    {
      title: "Citizen",
      image: citizen,
      description:
        "Citizen is a web app that helps users find and support local businesses in their area, fostering community engagement and economic growth.",
      tagsArray: ["Community", "Web App", "Local Business"],
      tags: "Housing, Web App, UX Research",
      link: "https://citizen.com",
    },
    ,
    {
      title: "ThriftFinder",
      image: thriftfinder,
      description:
        "ThriftFinder is a mobile app that connects thrift store enthusiasts with nearby thrift shops, helping them discover unique finds and sustainable fashion.",
      tagsArray: ["Sustainability", "Mobile App", "Fashion"],
      tags: "Housing, Web App, UX Research",
      link: "https://thriftfinder.com",
    },
  ];
  return (
    <div className="mb-8 md:mb-0">
      <Container className="">
        <div className="lg:container py-5 md:px-3 mx-auto">
          <h1 className="text-[24px] md:text-4xl mb-6">Featured Works</h1>
          <div className="grid grid-cols-1">
            {/* second project */}
            {projects.map((project, index) => (
              <Link
                to={project.caseStudyLink}
                className="mb-10 md:mb-16"
                key={index}
              >
                <img
                  src={project.image}
                  className="w-full h-auto mb-4 rounded-2xl max-h-[458px] object-cover"
                  alt=""
                />
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="grow w-full">
                    <h1 className="text-xl">{project.title}</h1>
                    <p className="text-orange-600">{project.tags}</p>
                  </div>
                  <div>
                    <p className="text-[#525866] text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {noCaseStudyProjects.map((project, index) => (
                <div className="" key={index}>
                  <img
                    src={project.image}
                    className="w-full h-auto mb-4 rounded-2xl max-h-[290px] object-cover"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <div className="grow w-full">
                      <h1 className="text-xl">{project.title}</h1>
                      <p className="text-orange-600">{project.tags}</p>
                    </div>
                    <div>
                      <p className="text-[#525866] text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProjects;
