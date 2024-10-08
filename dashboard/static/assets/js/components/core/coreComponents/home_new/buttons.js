import React from "react";

const buttons = () => {
  return (
    <div className="flex gap-10 py-10 relative h-auto items-center">

      <button className=" bg-green-500 text-white py-2 px-6 text-lg font-medium  tracking-wide hover:bg-green-600 transition duration-200">
        Work With Us
      </button>
      <button className="bg-gray-200 text-gray-800 py-2 px-6 text-lg font-medium  tracking-wide hover:bg-gray-300 transition duration-200">
        Learn More
      </button>
    </div>
  );
};

export default buttons;
