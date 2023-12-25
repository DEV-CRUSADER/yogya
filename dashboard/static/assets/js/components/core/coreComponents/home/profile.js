import React from "react";

const socialIcons = {
  LinkedIn: "fa-brands fa-linkedin",
  Whatsapp: "fa-brands fa-whatsapp",
  Facebook: "fa-brands fa-facebook",
  Instagram: "fa-brands fa-instagram",
  Twitter: "fa-brands fa-x-twitter",
  X: "fa-brands fa-x-twitter",
};

export function Profile({ image, name, description, socials, direction }) {
  return (
    <div className={`d-flex ${direction == "left" ? "flex-row-reverse" : ""} mt-5`}>
      <div>
        <img src={image} alt="Description of the Image" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center p-3 ">
        <div className="w-75 p-4">
          <h1>
            <span style={{ color: "var(--main-color)" }}>This is </span>
            <span style={{ color: "var(--white)" }}>{name}</span>
          </h1>
          <p className="fs-6" style={{ color: "var(--main-color)" }}>{description}</p>
          <div>
            {socials.map((social) => {
              return (
                <a
                  href={social.link}
                  target="_blank"
                  key={social.id}
                  className="fs-3 m-2"
                  style={{
                    color: "var(--main-color)",
                  }}
                >
                  <i className={socialIcons[social.name]}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
