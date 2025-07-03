import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import MyProjects from "../Components/MyProjects";
import ExperienceSection from "../Components/ExperienceSection";

function Home() {
  return (
    <>
      <Hero />
      <MyProjects />
      <AboutMe />
      <ExperienceSection />
    </>
  );
}

export default Home;
