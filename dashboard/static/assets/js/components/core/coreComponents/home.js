import {
  HomeComponents,
  Cards,
  AboutUS,
  CoreValuesPart,
  ProfitGraph,
  FeaturedCase,
  Footer,
} from "./homeComponents";
import React from "react";

const home = () => {
  return (
    <div style={{ letterSpacing: "0.7px", wordSpacing: "0.5px" }}>
      <HomeComponents />
      <Cards
        classes="flex gap-5 max-md:gap-0 justify-evenly flex-wrap"
        hasBorder={false}
        padding={true}
      />
      <AboutUS
        image="https://imgs.search.brave.com/LMHlC3j3QCA-4gnldNnY34k1JaB8d7CgHh9b7HxmmS4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA"
        page="About us"
        heading="About us heading text"
        description="description text should be visible here"
        quoteBox={true}
      />
      <CoreValuesPart />
      <ProfitGraph
        image="https://imgs.search.brave.com/d5_LU7jIep2xJ-zOvrs6aRAKjhfTu2GRsCAdKXbtgvw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW52ZXN0b3BlZGlh/LmNvbS90aG1iLy1S/dXgwb05mR3RhM2x5/NmNTOV8wYXpBRGZq/ST0vMTUwMHgwL2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L2RvdGRhc2hfRmlu/YWxfTWVhc3VyZV9Q/cm9maXRfUG90ZW50/aWFsX1dpdGhfT3B0/aW9uc19SaXNrX0dy/YXBoc19NYXJfMjAy/MC0wNC02OGFiNDc3/ZDdkYjY0ZTRlOGNk/NDI0MTRjNmI4N2Y5/Mi5qcGc"
        page="Profit graph"
        heading="We gives you the best Financial solution for business"
        description=""
      />
      <FeaturedCase image="https://imgs.search.brave.com/LMHlC3j3QCA-4gnldNnY34k1JaB8d7CgHh9b7HxmmS4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA" />
      <Footer />
    </div>
  );
};

export default home;
