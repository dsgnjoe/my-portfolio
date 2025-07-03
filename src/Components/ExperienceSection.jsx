import React from "react";
import Container from "../Components/Container";

const ExperienceSection = () => {

    const experience = [
        {
            title: "UX/UI Designer",
            company: "Hubtel",
            duration: "Mar 2024 - Present",
        },
        {
            title: "Product Designer",
            company: "Kriblink",
            duration: "Nov 2024 - Present",
        },
        {
            title: "UX/UI Designer (Freelance)",
            company: "Dataware Tech",
            duration: "Jan 2024 - Present",
        },
        {
            title: "UX/UI Designer",
            company: "Brolly",
            duration: "Sept 2022 - Jun 2023",
        },

    ]    

	return (
		<div className="mb-8 md:mb-0">
			<Container className="">
				<div className="lg:container py-5 md:px-3 mx-auto">
					<h1 className="text-[24px] md:text-4xl mb-6">Experience</h1>

					{experience.map((exp, index) => (
                        <div key={index} className="flex justify-between pb-5 mb-5 last:mb-0 last:pb-0 gap-8 lg:gap-16 border-b border-[#E2E4E9] last:border-0">
						<div>
							<p className="mb-2">{exp.title}</p>
							<p className="text-[#525866]">{exp.company}</p>
						</div>
						<div>
							<p className="text-[#525866] text-right text-nowrap">{exp.duration}</p>
						</div>
					</div>
                    ))}
				</div>
			</Container>
		</div>
	);
};

export default ExperienceSection;
