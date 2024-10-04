import React from "react";
import Buttons from "./buttons";
import "./css/home_new.css";

const Section1 = () => {
  return (
    <div className="outer-section-1">
      {/* Left Section (Text Content) */}
      <div className="left-section-1">
        <h1 className="heading-section-1">Secure Your Future From Today!</h1>
        <p className="description-section-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Buttons />
      </div>

      {/* Right Section (Image) */}
      <div className="right-section-1">
        <div className="right-image-of-section-1">
          <img
            src="https://imgs.search.brave.com/FZABFGxtyH08SundnBn4G-BoOlq8aspNsTE3ZZEvz9o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93ZWJzaXRlLXdp/dGgtd29yZC1jb25k/dWl0LXRvcC1pdF8x/MzI4MjE0LTIzNDIu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
            //   src=""
            alt="Placeholder"
            className="right-image-section-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
