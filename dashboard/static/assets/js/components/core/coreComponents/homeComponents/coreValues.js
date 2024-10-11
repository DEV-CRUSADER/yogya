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
          page="Core Value"
          heading="Services we serve to all over the world"
          description="Do you want to get notified when a new component is added to Flow bite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools."
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
              button1="Work with Us"
              button2="See All"
            />
        </div>
      </div>

      <Cards
        classes="grid grid-cols-2 max-sm:grid-cols-1 gap-3"
        hasBorder={true}
        Padding={false}
      />
      {/* </div> */}
    </div>
  );
};

export default coreValues;
