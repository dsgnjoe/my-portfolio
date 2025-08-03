import React from "react";
import kriblink from "/images/kriblink-thumbnail.svg";
import sendi from "/images/sendi.svg";
import citizen from "/images/citizen-website.svg";
import betta from "/images/bettaUI.svg";
import Container from "./Container";
import { Link } from "react-router";

const MyProjects = () => {
  const projects = [
       {
      title: "Kriblink",
      image: kriblink,
      description: "Rethinking off-campus housing for 15,000+ non-resident students",
      tagsArray: ["Housing", "Web App", "UX Research"],
      tags: "Housing, Web App, UX Research",
      link: "/kriblink",
      caseStudyLink: "/kriblink",
    },
    {
      title: "Sendi",
      image: sendi,
      description: "Making remittance more accessible and flexible with “Send Now, Pay Later” ",
      tags: "Design System",
      tagsArray: ["Design System"],
      link: "/sendi",
      caseStudyLink: "/sendi",
    },
    {
      title: "Betta UI",
      image: betta,
      description: "Betta UI Design System",
      tags: "Design System",
      // link: "",
    },
    {
      title: "CitizenApp Website",
      image: citizen,
      description: "CitizenApp website design",
      tags: "Web & Responsive Design",
      link: "https://www.citizen.gov.gh/",
      ongoing: false,
    },
  ];
  return (
    <div className="mb-8 md:mb-0">
      <Container className="">
        <div className="lg:container py-5 md:px-3 mx-auto">
          <h1 className="text-[24px] md:text-4xl mb-6 lg:mb-10">What I’ve been working on</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="group"
                >
                  <img
                    src={project.image}
                    className=" mb-4 rounded-2xl object-cover max-h-[292px] w-full"
                    alt=""
                  />

                  <div className="flex flex-col gap-2">
                    <div className="grow w-full flex justify-between items-center">
                      <div>
                        <h1 className="text-lg font-normal text-[#0A0D14]">{project.description}</h1>
                        {/* <p className="text-orange-600">{project.tags}</p> */}
                      </div>

                      {project.ongoing && (
                        <div className="bg-gray-100 rounded-3xl font-semibold py-2.5 px-5 h-full w-fit">
                          Coming Soon
                        </div>
                      )}
                    </div>
                                    </div>
                </Link>
              ))}
            </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProjects;
