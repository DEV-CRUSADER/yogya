import { HeadingDescription } from "./index";
import React from "react";

const aboutUs = ({ image, page, heading, description, quoteBox }) => {
  return (
    <div className="flex  flex-wrap-reverse lg:flex-row justify-between m-10 items-center h-full ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <img
          src={image}
          alt="loading..."
          className="h-auto w-4/5 max-xl:w-full rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        <HeadingDescription
          page={page}
          heading={heading}
          description={description}
          center={false}
        />

        {/* Quote Box */}
        {quoteBox ? (
          <div className="flex items-center bg-white shadow-md rounded-lg w-fit my-5 p-6">
            {/* Left Border and Quote Icon */}
            <div className="border-l-4 border-green-400 pl-4 pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-200 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6M9 12l.001-2.229c0-1.275 0-1.912.277-2.394a2 2 0 01.87-.87c.482-.277 1.12-.277 2.394-.277H15a2 2 0 012 2v2.772a2 2 0 01-2 2H9a2 2 0 01-2-2V9.772a2 2 0 012-2h.001"
                />
              </svg>
            </div>

            {/* Text Content */}
            <p className="text-gray-700 font-semibold text-lg">
              Successfully Providing the Best Business Solution from 20 years.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default aboutUs;
