import React from "react";
import heroPattern from "../images/hero-pattern.svg";
import { useEffect, useState } from "react";

const Hero = () => {
  const colors = [
    "bg-[#CBF5E5]",
    "bg-[#F8C9D2]",
    "bg-[#C2D6FF]",
    "bg-[#FBDFB1]",
    "bg-[#F9C2FF]",
    "bg-[#C2F9FF]",
    "bg-[#FFC2C2]",
    "bg-[#C2FFC2]",
    "bg-[#FFC2FF]",
    "bg-[#C2C2FF]",
  ];

  const pills = [
    { id: 1, label: "Figma" },
    { id: 2, label: "Interaction Design" },
    { id: 3, label: "Wireframing" },
    { id: 4, label: "Prototyping" },
    { id: 5, label: "User Research" },
    { id: 6, label: "VS Code" },
    { id: 7, label: "React" },
    { id: 8, label: "Version Control (Git)" },
  ];

  const [currentColors, setCurrentColors] = useState([]);

  const shuffleColors = () => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, pills.length);
  };

  useEffect(() => {
    setCurrentColors(shuffleColors());

    const interval = setInterval(() => {
      setCurrentColors(shuffleColors());
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPattern})` }}
      >
        <div className="container px-5 mx-auto pt-[85px] pb-20 lg:py-[150px]">
          <h6 className="text-[16px] lg:text-[32px] text-[#525866]">
            Hi, I’m Joseph.
          </h6>
          <p className="text-[24px] lg:text-[48px] font-bold">
            I transform complex problems into intuitive,{" "}
            <span className="text-[#868c98]">delightful</span> digital
            experiences that don't just work—they wow. With every pixel and
            interaction, I craft <span className="text-[#868c98]">design</span>{" "}
            that connect, engage, and transform.
          </p>

          <div className="mt-10 lg:max-w-[670px]">
            <div className="flex flex-wrap gap-4">
              {pills.map((pill, index) => (
                <div
                  key={pill.id}
                  className={`rounded-full px-3 py-2 flex-shrink-0 transition-colors ${currentColors[index]} w-fit`}
                >
                  {pill.label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 lg:text-right">
            <p className="text-[#868C98]">
              "Design is thinking made visual." - Saul Bass
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
