import React from "react";
import Container from "../Components/Container";
import { MdArrowOutward } from "react-icons/md";
import ReviewsImage from "../images/Review.png";
import AddImage from "../images/Add.png";
import ProjectGoals from "../images/Sign-up.png";
import CoverImage from "../images/Cover.png";
import Onboarding from "../images/Onboarding.png";
import Viewing from "../images/Find.png";

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
    <div className="my-10">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] md:text-5xl font-bold mb-2 leading-snug">
            Simplifying Instagram Shop Discovery With ThriftFinder
          </h1>
          <p className="text-sm md:text-base text-gray-700s mb-2">
            A mobile application enhancing the shopping experience by curating
            Instagram shops.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="text-sm md:text-base rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEBFF] w-fit">
              Mobile Design
            </div>
            <div className="text-sm md:text-base rounded-full px-3 py-2 flex-shrink-0 bg-[#EFFAF6] w-fit">
              UX Research
            </div>
            <div className="text-sm md:text-base rounded-full px-3 py-2 flex-shrink-0 bg-[#FDEDF0] w-fit">
              UI Design
            </div>
          </div>
        </div>

        <div className="h-[343px] md:h-[580px] mb-10 md:mb-20 ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={CoverImage}
            alt="cover image"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-20 mb-8 md:mb-16 ">
          <div className="col-span-2">
            <p className="text-[18px] md:text-[24px]  mb-6">
              A mobile application enhancing the shopping experience by curating
              Instagram shops. Users discover, add, and review shops, fostering
              a community-driven platform for shopping enthusiasts. This UX case
              study delves into design decisions for a seamless and engaging
              user experience.
            </p>
            <button className="border border-gray-500 rounded-full px-4 py-3 text-center  flex items-center gap-2">
              View Prototype <MdArrowOutward />
            </button>
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
        <div className="bg-gray-100 p-6 md:px-40 md:py-12 rounded-md mb-16">
          <h4 className="text-xl md:text-2xl font-semibold mb-1 md:mb-3">
            Problem Statement
          </h4>
          <p className="text-sm md:text-base text-gray-700">
            Finding shops on Instagram can be stressful, often requiring
            individuals to ask friends and family for recommendations.
            Instagram, a global social media platform, serves as a popular
            storefront where users display and market products. Simplifying the
            shop discovery process would enhance the shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center mb-16">
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-3">
              Project Goals
            </h4>
            <ul className="list-disc ps-5">
              <li className="text-sm md:text-base text-gray-700 mb-2">
                Make it easier for people to find genuine shops for their
                desired products on Instagram and reduce the risk of fraudulent
                acts.
              </li>
              <li className="text-sm md:text-base text-gray-700 mb-2">
                Allow people to add trusted shops they’ve bought from for other
                people to find it easily
              </li>
              <li className="text-sm md:text-base text-gray-700 mb-2">
                Reduce the time spent searching for shops.
              </li>
            </ul>
          </div>
          <div className="h-[315px] ">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={ProjectGoals}
              alt="Project Goals"
            />
          </div>
        </div>
        <div className="bg-gray-900 p-5 md:p-10 rounded-md mb-10 md:mb-16">
          <h4 className="text-xl md:text-2xl text-white font-semibold mb-3">
            Research
          </h4>
          <p className="text-sm md:text-base text-white mb-4">
            I prepared a survey to gather as much information as possible from
            diverse people to gain a general sense of what people sought to
            achieve in shopping on Instagram. After receiving 19 responses from
            the survey, I discovered that:
          </p>
          <ul className="list-disc ps-5">
            <li className="text-sm md:text-base text-gray-300 mb-2">
              People like to make purchases from Instagram
            </li>
            <li className="text-sm md:text-base text-gray-300 mb-2">
              Some people find it difficult finding shop on Instagram through
              hard search.
            </li>
            <li className="text-sm md:text-base text-gray-300 mb-2">
              A lot of people discover Instagram shops through recommendations
              from friends, advertisement on Snapchat stories, WhatsApp
              statuses, and hard search on Instagram and google which is a
              difficult task
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-20 mb-8 md:mb-16 ">
          <div className="  ">
            <p className="mb-2 text-base">The big question is,</p>
            <p className="text-xl md:text-[24px] font-bold ">
              How might we make it easier for thrift lovers or Instagram
              shoppers to discover shops to buy their desired products from?
            </p>
          </div>
          <div className="">
            <h4 className="text-xl md:text-2xl font-semibold mb-3">Solution</h4>
            <ul className="list-disc ps-5">
              <li className="text-sm md:text-base text-gray-700 mb-2">
                Design a catalog of Instagram shops. Users can filter shops by
                the products they desire, get an overview of the Instagram
                account and visit the Instagram account via the shop details
                page.
              </li>
              <li className="text-sm md:text-base text-gray-700 mb-2">
                Design a feature for users to add Instagram account they have
                bought from to add up to the catalog.
              </li>
              <li className="text-sm md:text-base text-gray-700 mb-2">
                Design a review feature for users to be able to review Instagram
                shops by their experiences and also report shops to avoid
                fraudulent acts.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-xl md:text-[24px] font-semibold mb-2">
            Designing ThriftFinder
          </h4>
          <p className="text-sm md:text-base text-gray-700">
            From my ideation process, I designed wireframes for the major
            features of application.
          </p>
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-medium mb-1">
            Onboarding Screens
          </h4>
          <p className="text-sm md:text-base text-gray-700">
            Users get create an account to access other functionalities of the
            app
          </p>
          <div>
            <img src={Onboarding} alt="Onboariding Image" />
          </div>
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-medium mb-1">
            Viewing a shop
          </h4>
          <p className="text-sm md:text-base text-gray-700">
            After choosing a product to purchase, users can view shops that are
            related to that item and visit a shop directly from the shop page.
          </p>
          <div>
            <img src={Viewing} alt="Viewing a shop" />
          </div>
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-medium mb-1">Adding a shop</h4>
          <p className="text-sm md:text-base text-gray-700 ">
            Users only need to enter the shop name and username of a shop they
            are familiar with to add it, and they can choose categories based on
            the products the shop sells.
          </p>
          <div>
            <img src={AddImage} alt="Add Image" />
          </div>
        </div>
        <div className="mb-8">
          <h4 className="text-lg md:text-xl font-medium mb-1">
            Reviewing a Shop
          </h4>
          <p className="text-sm md:text-base text-gray-700">
            Shoppers are able to rate shops and offer reviews based on their
            shopping experience
          </p>
          <div>
            <img src={ReviewsImage} alt="Reviews Image" />
          </div>
        </div>
        <div>
          <h4 className="text-lg md:text-[24px] font-medium mb-1">
            Expected Results
          </h4>
          <p className="text-sm md:text-base text-gray-700 ">
            As users explore and add Instagram stores, I predict higher user
            engagement, which will foster the growth of a community of avid
            shoppers. Feedback from users will lead to iterative product
            revisions. Thriftfinder will provide an easy-to-use platform for
            finding sustainable buying options on Instagram by enhancing shop
            exposure and listing quantity.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default ThriftFinder;
