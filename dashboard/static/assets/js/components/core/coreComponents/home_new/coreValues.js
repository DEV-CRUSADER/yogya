import { HeadingDescription, Buttons, Cards } from "./index";
import React from "react";

const coreValues = () => {
  return (
    <div className="flex flex-wrap md:flex-row justify-around m-10 ">
      <div
        style={{ wordSpacing: "1px" }}
        className="flex flex-col justify-center md:w-1/2 max-lg:w-full"
      >
        <HeadingDescription
          Page="Core Value"
          Heading="Services we serve to all over the world"
          Description="Do you want to get notified when a new component is added to Flow bite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools."
          center={false}
        />

        <span style={{ letterSpacing: "1px" }} className="font-bold text-lg">
          Our work draws on more than 40 years of experience.
        </span>

        <p style={{ letterSpacing: "1px" }} className="">
          Lorem ipsum is simply dummy text of the printing and typesetting.
        </p>
        <div className="flex justify-center items-center">
            <Buttons
              success_button_title="Work with Us"
              More_button_title="See All"
            />
        </div>
      </div>

      {/* <div className= */}

      <Cards
        Classes="grid grid-cols-2 max-sm:grid-cols-1 gap-3"
        hasBorder={true}
        Padding={false}
      />
      {/* </div> */}
    </div>
  );
};

export default coreValues;
