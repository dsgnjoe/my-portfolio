import React from "react";
import Container from "../Components/Container";
import { MdArrowOutward } from "react-icons/md";
import SendiCoverImage from "/images/sendi-banner.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { div } from "motion/react-client";

function Sendi() {
    const details = [
        { label: "Role", value: "Product Designer" },
        { label: "Tools", value: "Figma, Notion" },
        { label: "Project Duration", value: "4 Weeks" },
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
                    This makes Sendi even more relevant as a solution for this
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
                    landlords and students. Sendi reinforced a key lesson for me: great
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
                "A homepage with a clean UI, clear value proposition, simple filters to help students easily find their ideal accommodation.",
            images: (
                <div className="w-full">
                    <img
                        src="/images/Sendi/cleanherosec.png"
                        alt="room details"
                        className="object-contain md:object-cover w-full h-auto rounded-lg"
                    />
                </div>
            ),
        },
        {
            caption:
                "A listings page featuring dynamic filters and a collection of verified rooms. Each room card displays key details, including the price, gender specification, number of beds, and location.",
            images: (
                <div className="w-full">
                    <img
                        src="/images/Sendi/listing-page.png"
                        alt="room details"
                        className="object-contain md:object-cover w-full h-auto rounded-lg"
                    />
                </div>
            ),
        },
        {
            caption:
                "A room details page to include a full description, images, and a video for transparency, along with a list of available amenities. Users can also share a link to the room with others and access a map for directions to the property after booking.",
            images: (
                <div className="w-full">
                    <img
                        src="/images/Sendi/room-details.png"
                        alt="room details"
                        className="object-contain md:object-cover w-full h-auto rounded-lg"
                    />
                </div>
            ),
        },
        {
            caption:
                "After booking a room, users are shown a confirmation screen displaying their room identification number, the amount paid, and options to view their receipt or access the booked room details.",
            images: (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src="/images/Sendi/payment-screen.svg"
                        alt="payment desktop"
                        className="object-contain md:object-cover w-full h-auto max-h-[471px] rounded-md"
                    />
                    <img
                        src="/images/Sendi/bookedroom.svg"
                        alt="payment mobile"
                        className="object-contain md:object-cover w-full h-auto max-h-[471px] rounded-md"
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="my-10">
            <Container className="mb-5">
                <div className="lg:container py-5 md:px-3 mx-auto">
                    <a
                        href="/"
                        className="text-sm mb-10 flex items-center justify-start gap-1"
                    >
                        <MdKeyboardArrowLeft />
                        <span>Return to home</span>
                    </a>
                    <h1 className="text-[28px] md:text-[40px] mb-8 leading-snug">
                        Making remittance more accessible and flexible with
                        <br className="hidden lg:block" />
                        “Send Now, Pay Later”
                    </h1>

                    <img
                        className="w-full h-auto md:h-full max-h-[456px] object-contain md:object-cover rounded-xl md:rounded-3xl mb-10"
                        src={SendiCoverImage}
                        alt="cover-image"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {details.map((detail, index) => (
                            <div key={index}>
                                <h6 className="text-[#868C98] text-sm md:text-base">
                                    {detail.label}
                                </h6>
                                <h5 className="text-[#525866] text-base md:text-lg">
                                    {detail.value}
                                </h5>
                            </div>
                        ))}
                    </div>

                    <div className="mb-10 lg:w-5/6">
                        <h1 className="text-[24px] md:text-3xl mb-5 font-light">Background</h1>
                        <p className="text-[#525866] text-lg font-light">
                            Sendi is a remittance app built to make sending money across borders easier and more flexible, starting with transfers from the UK to Ghana. The idea came from a real need. People often have to send money in urgent situations but may not have the funds right away. Traditional services require full payment upfront, which leaves many people out. Sendi solves this by letting users send money now and pay later, while keeping the experience clear, safe, and easy to use.                        </p>
                    </div>

                    <div className="mb-10 bg-[#EBF1FF] p-8 rounded-2xl lg:w-5/6">
                        <p className="text-[#525866] text-lg">
                            I’m excited to share more details about this project once I have pulled together all the key parts from research and design thinking to the final results, I will walk through how we tackled the problem, what we learned, and the impact we made. I am excited to share the story behind it.</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-10">
                        <button className="text-white bg-black rounded-xl flex items-center justify-center gap-2  px-3.5 py-3.5  text-[14px]">
                            View Next Case Study
                            <MdKeyboardArrowRight className="text-xl" />
                        </button>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Sendi;
