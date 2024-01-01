import React from "react";

const socialIcons = {
  LinkedIn: "fa-brands fa-linkedin",
  Whatsapp: "fa-brands fa-whatsapp",
  Facebook: "fa-brands fa-facebook",
  Instagram: "fa-brands fa-instagram",
  Twitter: "fa-brands fa-x-twitter",
  X: "fa-brands fa-x-twitter",
  Phone: "fa-solid fa-phone",
  Whatsapp: "fa-brands fa-whatsapp",
  Email: "fa-solid fa-envelope",
};

export function Profile({ image, name, description, socials, direction }) {
  return (
    <div className={`d-flex flex-column flex-sm-column ${direction == "left" ? "flex-md-row-reverse" : ""} 
            ${direction == "left" ? "flex-lg-row-reverse" : ""}  ${direction == "left" ? "flex-xl-row-reverse" : ""}`}>
      <div className="p-5">
        <img className="img-fluid" src={image} alt={name}/>
      </div>
      <div className={`d-flex flex-column justify-content-center align-items-center w-100 w-md-50 w-lg-50`}>
        <div className="w-75 m-2">
          <h1>
            <span style={{ color: "var(--black)", opacity:0.7 }}>This is </span>
            <span style={{ color: "var(--white)" }}>{name}</span>
          </h1>
          <p className="fs-6 " style={{ color: "var(--primary-text)", opacity:0.8 }}>{description}</p>
          <div>
            {socials.map((social) => {
              return (
                <a
                  href={social.link}
                  target="_blank"
                  key={social.id}
                  className="fs-3 m-2"
                >
                  <i className={`${socialIcons[social.name]} hover-effect`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
