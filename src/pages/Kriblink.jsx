import React from "react";
import Container from "../Components/Container";
import { MdArrowOutward } from "react-icons/md";
import KriblinkCoverImage from "/images/kriblink/cover.svg";
import { div } from "motion/react-client";

function Kriblink() {
  const details = [
    { label: "Project Duration", value: "8 Weeks" },
    { label: "Role", value: "Product Designer" },
    { label: "Tools", value: "Figma, Google Forms, Notion" },
  ];

  const caseStudyParagraphs = [
    {
      title:
        "Why finding off-campus housing is a recurring nightmare for thousands of students",
      description: (
        <>
          University enrolment continues to grow, but on-campus housing has not
          kept pace. The opportunity became clearer when we looked into the
          numbers: in 2024 alone, over 16,000 freshers enrolled, but only 9.67%
          could be housed on campus. This meant that over 90% were forced to
          seek alternative housing, usually under pressure and without trusted
          platforms. Despite this recurring problem, existing platforms weren’t
          tailored to student-specific needs like verified listings, or easy and
          secure booking. <br />
          <br />
          This makes Kriblink even more relevant as a solution for this
          expanding group. With the rise in non-resident students, there’s a
          clear need for a scalable platform offering safe, trustworthy, and
          easy-to-use off-campus housing. Since many students are new to the
          housing process, prioritizing trust, clarity, and simplicity is
          essential to support their transition.
        </>
      ),
    },
    {
      title:
        "Uncovering real student pain points through interviews, focus groups, and market data",
      description: (
        <>
          To better understand the problem, I led user interviews with 10
          students and facilitated focus group sessions with 12 more. What we
          discovered was eye-opening: 80% feared getting scammed, 70% struggled
          to balance housing searches with academic life, and 65% felt
          overwhelmed by unclear booking processes. Many shared stories of
          missed opportunities and frustration. Students wanted safety,
          transparency, and ease — something current platforms weren’t
          delivering. <br /> <br />
          We also studied similar platforms to benchmark features. While they
          had robust search systems and high-quality visuals, they lacked
          student-friendly pricing and lease terms. These insights helped define
          the core features we needed to build.
        </>
      ),
    },
    {
      title:
        "Bringing it all together: a feature set built around trust, simplicity, and speed",
      description: (
        <>
          Our target users included Daniel, a first-year student new to the
          system, and Ama, a returning student frustrated by previous poor
          experiences. Both were looking for a better way to find housing
          without the stress and uncertainty.
          <br />
          <br />I mapped out Daniel’s journey — from discovering the platform to
          making a booking — to identify where we could remove friction. From
          this, we designed a platform experience that focused on verified
          listings, smart filters, and a seamless, three-step booking process.
          <br />
          <br />
          Starting with low-fidelity wireframes, I explored layout and user
          flows. These evolved into a high-fidelity prototype that emphasised
          simplicity, trust, and ease of use. We tested it with five students,
          and the feedback was very encouraging: “The booking process was so
          easy to follow,” one said. Others praised the filters and visual
          clarity. Based on their input, we refined filter placement, clarified
          the payment flow which we employed a third party payment platform, and
          simplified confirmation steps.
        </>
      ),
    },
    {
      title:
        "What happened after launch — wins, lessons, and where we missed the mark",
      description: (
        <>
          Although the idea of the product attracted over 300 students to our
          waitlist within a month, a key insight emerged post-launch. The
          platform didn’t gain traction as expected. Why? Because we’d
          overlooked the supply side. The true primary users weren’t just the
          students — they were the property owners, and we hadn’t built for
          them. To drive value for students, we needed to build relationships
          with enough landlords to list their spaces. Without them, we couldn’t
          offer variety or availability.
          <br />
          <br />
          This was a tough but valuable realisation. It highlighted the
          importance of defining the right core user — not just the one with the
          most visible pain, but the one who drives the ecosystem.
        </>
      ),
    },
    {
      title:
        "Shifting focus to property owners and building a truly two-sided platform",
      description: (
        <>
          Moving forward, we aimed to equip property owners with tools to list
          and manage rooms, creating a fully connected platform for both
          landlords and students. Kriblink reinforced a key lesson for me: great
          UX only succeeds when it’s built on the right product strategy. True
          impact comes from designing with the bigger picture in mind, not just
          the interface.
        </>
      ),
    },
  ];

  const features = [
    {
      caption:
        "The final design featured a homepage with a clear value proposition, strong call-to-action, testimonials, and dynamic filters to help students easily find their ideal accommodation.",
      images: (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          <img
            src="/images/kriblink/hero-desktop.png"
            alt="hero desktop"
            className="object-contain md:object-cover md:col-span-3 w-full md:h-full"
          />
          <img
            src="/images/kriblink/hero-mobile.png"
            alt="hero mobile"
            className="w-full object-contain md:object-cover md:col-span-1"
          />
        </div>
      ),
    },
    {
      caption:
        "We designed a listings page featuring dynamic filters and a collection of verified rooms. Each room card displays key details, including the price, gender specification, number of beds, and location.",
      images: (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          <img
            src="/images/kriblink/rooms-mobile.png"
            alt="all rooms mobile"
            className="w-full object-contain md:object-cover md:col-span-1"
          />
          <img
            src="/images/kriblink/rooms-desktop.png"
            alt="all rooms desktop"
            className="object-contain md:object-cover md:col-span-3 md:h-full"
          />
        </div>
      ),
    },
    {
      caption:
        "We designed the room details page to include a full description, images, and a video for transparency, along with a list of available amenities. Users can also share a link to the room with others and access a map for directions to the property after booking.",
      images: (
        <div className="w-full">
          <img
            src="/images/kriblink/room-details.png"
            alt="room details"
            className="object-contain md:object-cover md:col-span-3 md:h-full"
          />
        </div>
      ),
    },
    {
      caption:
        "After booking a room, users are shown a confirmation screen displaying their room identification number, the amount paid, and options to view their receipt or access the booked room details.",
      images: (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          <img
            src="/images/kriblink/payment-desktop.png"
            alt="payment desktop"
            className="object-contain md:object-cover md:col-span-3 md:h-full"
          />
          <img
            src="/images/kriblink/payment-mobile.png"
            alt="payment mobile"
            className="w-full object-contain md:object-cover md:col-span-1"
          />
        </div>
      ),
    },
    {
      caption: "",
      images: (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          <img
            src="/images/kriblink/booked-room-desktop.png"
            alt="booked room desktop"
            className="object-contain md:object-cover md:col-span-3 md:h-full"
          />
          <img
            src="/images/kriblink/booked-room-mobile.png"
            alt="booked room mobile"
            className="w-full object-contain md:object-cover md:col-span-1"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] md:text-5xl font-bold mb-2 leading-snug">
            Rethinking Student Housing for 15,000+ Non-Resident Students
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-2">
            A digital platform built to simplify off-campus housing for students
            by providing access to verified listings, smart search tools, and a
            frictionless booking experience.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="text-sm text-white border border-gray-400 md:text-base rounded-full px-3 py-2 flex-shrink-0 bg-[#525866] w-fit">
              UX Research
            </div>
            <div className="text-sm  text-white border border-gray-400 md:text-base rounded-full px-3 py-2 flex-shrink-0 bg-[#525866] w-fit">
              Housing
            </div>
            <div className="text-sm  text-white border border-gray-400 md:text-base rounded-full px-3 py-2 flex-shrink-0 bg-[#525866] w-fit">
              Web App
            </div>
          </div>
        </div>

        <div className="md:h-[580px] mb-10 md:mb-20 ">
          <img
            className="w-full md:h-full object-contain md:object-cover rounded-2xl"
            src={KriblinkCoverImage}
            alt="cover image"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-20 mb-8 md:mb-16 ">
          <div className="col-span-2">
            <p className="text-[18px] md:text-[24px]  mb-6">
              Kriblink is a digital platform built to simplify off-campus
              housing for students by providing access to verified listings,
              smart search tools, and a frictionless booking experience. The
              goal was to create a trustworthy and student-centered solution
              that solves the recurring challenges students face when trying to
              secure accommodation outside of campus.
            </p>
          </div>
          <div className="col-span-1 gap-6">
            {/* Project Details */}

            {details.map(({ label, value }, i) => (
              <div key={i} className="flex flex-col gap-2 mb-2">
                <p className="text-[#868C98] text-sm  md:text-base">{label}</p>
                <p className="text-base md:text-[18px] text-gray-600 ">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {caseStudyParagraphs.slice(0, 3).map((paragraph, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-xl lg:text-2xl font-semibold">{paragraph.title}</h2>

              <p className="text-sm lg:text-[16px] font-light">{paragraph.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 py-6 mb-8 lg:mb-12">
          {features.map((feature, i) => (
            <div key={i} className="space-y-4">
              <div className="lg:pt-10 lg:pb-6">
              <p>{feature.caption}</p>
              </div>
              {feature.images}
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {caseStudyParagraphs.slice(3, 5).map((paragraph, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-xl lg:text-2xl font-semibold">{paragraph.title}</h2>

              <p className="text-sm lg:text-[16px] font-light">{paragraph.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Kriblink;
