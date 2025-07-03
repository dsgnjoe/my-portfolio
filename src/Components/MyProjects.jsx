import React from "react";
import { MdArrowOutward } from "react-icons/md";
import kriblink from "/images/kriblink/Kriblink.png";
import citizen from "/images/Citizen.png";
import thriftfinder from "/images/thriftfinder.svg";
import { motion } from "motion/react";
import Container from "./Container";
import { image, img } from "motion/react-client";

const MyProjects = () => {
	const projects = [
		{
			title: "Kriblink",
			image: kriblink,
			description:
				"Kriblink is a digital platform built to simplify off-campus housing for students by providing access to verified listings, smart search tools, and a frictionless booking experience.",
			tagsArray: ["Housing", "Web App", "UX Research"],
			tags: 'Housing, Web App, UX Research',
			link: "https://kriblink.com",
		},
		{
			title: "Citizen",
			image: citizen,
			description:
				"Citizen is a web app that helps users find and support local businesses in their area, fostering community engagement and economic growth.",
			tagsArray: ["Community", "Web App", "Local Business"],
			link: "https://citizen.com",
		},
		{
			title: "ThriftFinder",
			image: thriftfinder,
			description:
				"ThriftFinder is a mobile app that connects thrift store enthusiasts with nearby thrift shops, helping them discover unique finds and sustainable fashion.",
			tagsArray: ["Sustainability", "Mobile App", "Fashion"],
			link: "https://thriftfinder.com",
		},
	];
	return (
		<div className="mb-8 md:mb-0">
			<Container className="">
				<div className="lg:container py-5 md:px-3 mx-auto">
          <h1 className="text-[24px] md:text-4xl mb-6">
						Featured Works
					</h1>
					<div className="grid grid-cols-1">
						{/* second project */}
						{projects.map((project, index) => (
							<div className="mb-10 md:mb-16 last:mb-0" key={index}>
						<img src={project.image} className="w-full h-auto mb-4 rounded-2xl max-h-[458px] object-cover" alt="" />
							<div className="flex flex-col lg:flex-row justify-between gap-4">
								<div className="grow w-full">
									<h4 className="text-xl">{project.title}</h4>
									<p className="text-orange-600">
										{project.tags}
									</p>
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
			</Container>
		</div>
	);
};

export default MyProjects;
