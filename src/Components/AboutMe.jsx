import React from "react";
import Container from "../Components/Container";
import joeImage from "/images/joe-img.png";

const AboutMe = () => {
	return (
		<div className="mb-8 md:mb-0">
			<Container className="">
				<div className="lg:container py-5 px-3 mx-auto">
					<h1 className="text-[24px] md:text-4xl mb-6">
						Designer <span className="text-[#525866]"> & </span>Thinker
					</h1>

					<div className="flex flex-col md:flex-row gap-8 lg:gap-24 mb-2">
						<div className="md:w-7/12 lg:w-3/4">
							<p className="text-[#525866] mb-2 text-base">
								I'm a UX designer with over 3 years of experience creating
								user-focused solutions across industries like insurance,
								internal tools, and e-commerce. My work focuses on making
								complex systems feel simple, intuitive, and human—because at the
								core of what I do is the belief that great design should make
								life easier.
							</p>
							<p className="text-[#525866] mb-2 text-base">
								My approach to design is grounded in clarity, empathy, and
								purpose. I strive to balance user needs with business goals,
								ensuring that every design decision adds value. I enjoy
								collaborating closely with cross-functional teams to bring ideas
								to life in ways that are both functional and impactful.
							</p>
                            <p className="text-[#525866] text-base">
                                When I’m not in design mode, you’ll likely find me at the gym, on
                                the basketball court, or enjoying a quiet moment by the beach. It’s
                                how I recharge and find inspiration beyond the screen.
                            </p>
						</div>
						<div className="md:w-5/12 lg:w-1/4 h-full">
                        <div className="overflow-hidden rounded-2xl h-full w-full">
							<img src={joeImage} alt="" className="w-full h-full object-cover" />
                        </div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default AboutMe;
