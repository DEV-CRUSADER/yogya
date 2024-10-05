import { HeadingDescription } from "./index";
import React from "react";

const profitGraph = (props) => {
  const feature = [
    {
      logo: "https://cdn-icons-png.flaticon.com/128/10568/10568075.png",
      Heading: "Security",
      Description: "We offer protection when your customers have financial.",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/128/9550/9550830.png",
      Heading: "Flexibility",
      Description: "Sounding grows in line with your daily sales update.",
    },
  ];
  return (
    <div>
      <div className="flex  flex-wrap-reverse lg:flex-row justify-between m-10 items-center h-full ">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            src={props.Image}
            alt="loading..."
            className="h-auto w-4/5 max-xl:w-full rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <HeadingDescription
            Page={props.Page}
            Heading={props.Heading}
            Description={props.Description}
          />
          {feature.map((values,index) => {
            return (
              <div className="flex w-fit py-2 px-4 mb-5" key={index}>
                <img
                  src={values.logo}
                  alt="secure..."
                  className="h-10 w-10 mr-2"
                />
                <div className="flex flex-col gap-3 leading-3">
                  <h5>{values.Heading}</h5>
                  <p className="leading-5">{values.Description}</p>
                </div>
              </div>
            );
          })}

          <button className="bg-green-500 text-white py-2 px-6 h-12 text-lg font-medium  tracking-wide hover:bg-green-600 transition duration-200 mb-5">
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
};

export default profitGraph;
