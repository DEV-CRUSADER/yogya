import React from "react";

const headingDescription = (props) => {
  return (
    <div
      className={` max-md:w-full pt-10 leading-4${
        props.center ? " text-center" : "lg:text-left"
      }`}
    >
      <h3 className="text-sm text-green-400 font-semibold uppercase">
        {props.Page}
      </h3>
      <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight w-full max-lg:w-3/4 max-sm:w-full">
        {props.Heading}
      </h1>
      <p className="mt-4 text-gray-500 text-base sm:text-lg lg:text-xl max-w-2xl">
        {props.Description}
      </p>
    </div>
  );
};

export default headingDescription;
