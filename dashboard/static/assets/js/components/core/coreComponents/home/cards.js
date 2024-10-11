import React from "react";

//TODO: That all imported Images are taken from the undraw.co website
import {
  Finance,
  FinanceBrand,
  FinanceAdvices,
  ComprehensiveAdvices,
  Link,
} from "./index";

const cards = (props) => {
  const items = [
    {
      Icon: Finance,
      Icon_alt_text: "Best Financial Advice...",
      Heading: "Best Financial Advice",
      Description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
    {
      Icon: FinanceBrand,
      Icon_alt_text: "Authorized Finance Brand...",
      Heading: "Authorized Finance Brand",
      Description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
    {
      Icon: FinanceAdvices,
      Icon_alt_text: "Comprehensive Advices...",
      Heading: "Comprehensive Advices",
      Description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
    {
      Icon: ComprehensiveAdvices,
      Icon_alt_text: "The Best Tax Advantages...",
      Heading: "The Best Tax Advantages",
      Description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
  ];
  return (
    <div className={`wrapper ${props.Classes}`}>
      {items.map((element, index) => {
        return (
          <div
            key={index}
            className={`bg-white overflow-hidden w-80 ${
              props.hasBorder
                ? "border border-gray-200 rounded-2xl shadow-lg"
                : ""
            }`}
          >
            <Link to="/">
              <img
                className="rounded-t-lg h-28 w-auto object-contain"
                src={element.Icon}
                alt={element.Icon_alt_text}
              />
            </Link>
            <div className={`${props.Padding ? "p-5" : "px-3 py-2"}`}>
              <Link to="/">
                <h5 className="mb-2 text-xl font-bold tracking-normal ">
                  {element.Heading}
                </h5>
              </Link>
              <p className="mb-3 tracking-wide text-left whitespace-break-spaces">
                {element.Description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
