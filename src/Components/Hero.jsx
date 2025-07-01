import React from "react";
import Container from "../Components/Container";
import messageIcon from "/images/svg/get-in-touch-icon.svg";
import Navbar from "../Components/Navbar";
import heroBgPattern from "/images/hero-bg-pattern.png";
import { RiMessage3Line } from "react-icons/ri";


const Hero = () => {
	return (
		<div className="mb-8 md:mb-0">
			<Container className="">
        <Navbar />
				<div className="lg:container text-center px-3 py-5 md:pb-[160px] pt-[160px] relative z-10">
					<h1 className="text-[28px] md:text-5xl mb-2">
						Hello, I’m Joseph. A{" "}
						<span className="text-[#525866]">Product Designer</span>
					</h1>
					<h1 className="text-[28px] md:text-5xl mb-2">
						focused on designing experiences that make
					</h1>
					<h1 className="text-[28px] md:text-5xl mb-2">
						life <span className="text-[#525866]">easier</span> and more{" "}
						<span className="text-[#525866]"> enjoyable</span>.
					</h1>
					<div className="text-center mt-8 mb-8">
						<button className="px-5 py-3 mx-auto transition-all bg-[#C2540A] hover:bg-[#904d20] text-white rounded-xl flex items-center gap-2">
						  <RiMessage3Line className="text-white" /> Get in Touch
						</button>
					</div>
				</div>

        <img src={heroBgPattern} alt="" className="absolute bottom-0 left-0 right-0 w-full z-0" />
			</Container>
		</div>
	);
};

export default Hero;
