import React from "react";
import { MdArrowOutward } from "react-icons/md";
import kriblink from "../images/kriblink.png";

const MyProjects = () => {
	return (
		<div className="container px-5 mx-auto pb-20">
			<h4 className="text-[20px] font-bold pb-6">Featured Works</h4>

			<div className="flex flex-col gap-20 mb-20">
				<div>
					<div class="flex flex-col lg:flex-row justify-center items-center gap-4">
						<div class="bg-[#ffdcc2] p-6 lg:p-12 lg:w-3/4 rounded-lg">
							<img src={kriblink} alt="" className="rounded-lg" />
						</div>
						<div class="col-span-2 px-0 py-4 lg:p-4 lg:w-1/2">
							<div className="flex flex-wrap gap-4 mb-6">
								<div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEBFF] w-fit">
									Case Study
								</div>
								<div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#EFFAF6] w-fit">
									Web App
								</div>
							</div>

							<div>
								<h4 className="text-[40px] font-bold pb-3">Kriblink</h4>
								<p className="text-[#525866]  pb-3">
									A platform that helps students easily find safe, affordable,
									and convenient off-campus accommodation with verified listings
									and smart search tools.
								</p>

								<a
									href=""
									className="text-black font-medium flex items-center gap-2"
								>
									View Prototype
									<MdArrowOutward />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="flex flex-col lg:flex-row justify-center items-center gap-4">
						<div class="col-span-2 px-0 py-4 lg:p-4 lg:w-1/2">
							<div className="flex flex-wrap gap-4 mb-6">
								<div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEBFF] w-fit">
									Case Study
								</div>
								<div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#EFFAF6] w-fit">
									Web App
								</div>
							</div>

							<div>
								<h4 className="text-[40px] font-bold pb-3">Kriblink</h4>
								<p className="text-[#525866]  pb-3">
									A platform that helps students easily find safe, affordable,
									and convenient off-campus accommodation with verified listings
									and smart search tools.
								</p>

								<a
									href=""
									className="text-black font-medium flex items-center gap-2"
								>
									View Prototype
									<MdArrowOutward />
								</a>
							</div>
						</div>

						<div class="bg-[#ffdcc2] p-6 lg:p-12 lg:w-3/4 rounded-lg">
							<img src={kriblink} alt="" className="rounded-lg" />
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#F6F8FA] border border-[#E2E4E9] rounded-lg p-7">
				<p className="text-[20px] lg:text-[36px] text-center font-bold lg:mx-48  mb-3 md:mb-0">
					My design philosophy is rooted in empathy and a deep understanding of
					the end user.
				</p>

				<div className="flex flex-col md:flex-row justify-center gap-4 items-center">
					<button className="border border-black bg-black rounded-full px-4 py-3 text-center text-white">
						See My Resume
					</button>
					<button className="border border-black rounded-full px-4 py-3 text-center  flex items-center gap-2 ">
						Let's connect
						<MdArrowOutward />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
