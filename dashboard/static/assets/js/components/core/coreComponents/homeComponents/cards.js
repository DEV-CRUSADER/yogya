import React from "react";

//TODO: That all imported Images are taken from the undraw.co website
import {
  Finance,
  FinanceBrand,
  FinanceAdvices,
  ComprehensiveAdvices,
  Link,
} from "./index";

const cards = ({ classes, hasBorder, padding }) => {
  const items = [
    {
      icon: Finance,
      icon_alt_text: "Best Financial Advice...",
      heading: "Best Financial Advice",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
    {
      icon: FinanceBrand,
      icon_alt_text: "Authorized Finance Brand...",
      heading: "Authorized Finance Brand",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
    {
      icon: FinanceAdvices,
      icon_alt_text: "Comprehensive Advices...",
      heading: "Comprehensive Advices",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
    {
      icon: ComprehensiveAdvices,
      icon_alt_text: "The Best Tax Advantages...",
      heading: "The Best Tax Advantages",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    },
  ];
  return (
    <div className={`wrapper ${classes}`}>
      {items.map((element, index) => {
        return (
          <div
            key={index}
            className={`bg-white overflow-hidden w-80 ${
              hasBorder
                ? "border border-gray-200 rounded-2xl shadow-lg"
                : ""
            }`}
          >
            <Link to="/">
              <img
                className="rounded-t-lg h-28 w-auto object-contain"
                src={element.icon}
                alt={element.icon_alt_text}
              />
            </Link>
            <div className={`${padding ? "p-5" : "px-3 py-2"}`}>
              <Link to="/">
                <h5 className="mb-2 text-xl font-bold tracking-normal ">
                  {element.heading}
                </h5>
              </Link>
              <p className="mb-3 tracking-wide text-left whitespace-break-spaces">
                {element.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
