// components/index.js

// Import all your components here
import HomeComponents from "./section_1";
import Cards from "./cards";
import AboutUS from "./aboutUS";
import CoreValuesPart from "./coreValues";
import ProfitGraph from "./profitGraph";
import FeaturedCase from "./featuredCases";
import WeAreHire from "./hire";
import { Footer } from "../footer";
import HeadingDescription from "./headingDescription";
import Buttons from "./buttons";

// Routing
import { Link } from "react-router-dom"; // Correct import for Link

// Import all your Images here
import Finance from "../../../../../img/finance.png";
import FinanceBrand from "../../../../../img/brand.png";
import FinanceAdvices from "../../../../../img/advices.png";
import ComprehensiveAdvices from "../../../../../img/compehensiveAdvices.png";

// Export them all in one place
export {
  // components
  Link,
  HomeComponents,
  Cards,
  AboutUS,
  CoreValuesPart,
  ProfitGraph,
  FeaturedCase,
  WeAreHire,
  Footer,
  HeadingDescription,
  Buttons,

  // Images
  Finance,
  FinanceBrand,
  FinanceAdvices,
  ComprehensiveAdvices,
};
