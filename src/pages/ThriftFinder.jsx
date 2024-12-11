import React from "react";
import Container from "../Components/Container";
import { MdArrowOutward } from "react-icons/md";

function ThriftFinder() {
  const details = [
    { label: "Project Duration", value: "5 Weeks" },
    { label: "Role", value: "Product Designer" },
    { label: "Tools", value: "Figma, Google Forms, Notion" },
    {
      label: "Skills",
      value: "User Research, Tasks Flows, Prototyping, Usability Testing",
    },
  ];

  return (
    <div className="my-20">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold mb-2 leading-snug">
            Simplifying Instagram Shop Discovery With ThriftFinder
          </h1>
          <p className="text-base mb-2">
            A mobile application enhancing the shopping experience by curating
            Instagram shops.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEBFF] w-fit">
              Mobile Design
            </div>
            <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#EFFAF6] w-fit">
              UX Research
            </div>
            <div className="rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEDF0] w-fit">
              UI Design
            </div>
          </div>
        </div>

        <div className="h-[580px] mb-10 ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/src/images/Cover.png"
            alt="cover image"
          />
        </div>

        <div className="grid grid-cols-3 gap-20 ">
          <div className="col-span-2 ">
            <h3 className="text-[24px] mb-6">
              A mobile application enhancing the shopping experience by curating
              Instagram shops. Users discover, add, and review shops, fostering
              a community-driven platform for shopping enthusiasts. This UX case
              study delves into design decisions for a seamless and engaging
              user experience.
            </h3>
            <button className="border border-gray-500 rounded-full px-4 py-3 text-center  flex items-center gap-2">
              View Prototype <MdArrowOutward />
            </button>
          </div>
          <div className="col-span-1 gap-6">
            {/* Project Details */}

            {details.map(({ label, value }, i) => (
              <div
                key={i}
                className="flex flex-col gap-2
            "
              >
                <p className="text-[#868C98]">{label}</p>
                <p className="text-[18px]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ThriftFinder;
