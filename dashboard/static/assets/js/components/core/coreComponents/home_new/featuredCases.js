import React from "react";
import HeadingDescription from "./headingDescription";

const FeaturedCases = (props) => {
  return (
    <div className="w-full bg-white py-10">
      {/* Section 1: Heading and Description */}
      <div className="flex flex-col justify-center items-center mb-10">
        <HeadingDescription
          Page="featured cases"
          Heading="Completed Projects"
          Description="lorem ipsum is simply duma text of the printing and typeSettings industry. Lorem Ipsum has been the under dummy text ever since the 1500s.when an unknowns printer"
          center={true}
        />
      </div>

      {/* Section 2: Services and Image */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 space-y-10 md:space-y-0 md:space-x-12">
        {/* Large Number Background */}
        <div className="absolute left-0 top-0 text-green-100 font-bold text-[200px] leading-none opacity-10 hidden md:block -z-10">
          02
        </div>

        {/* Text Section */}
        <div className="relative z-10 flex-1 md:mr-6 text-left">
          <h3 className="text-3xl font-bold text-gray-900">
            Services we serve to all over the world
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <a
            href="/"
            className="mt-6 inline-block text-green-500 hover:text-green-700 font-semibold  "
          >
            Read More
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={props.Image}
            alt="Featured cases"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCases;
