import React from "react";

export const icons = {
  call: "fa-solid fa-phone",
  location: "fa-solid fa-location-dot",
  mail: "fa-solid fa-envelope",
};

export function ContactInfo() {
  const constactDetails = [
    {
      icon: icons.call,
      head: "Phone",
      description: "+91 75674 73055",
    },
    {
      icon: icons.location,
      head: "Our Location",
      description: "2004-2005 Arihant Market, Ring road, Surat, Gujarat",
    },
    {
      icon: icons.mail,
      head: "Email US",
      description: "chirag.jain@yahoo.com",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center w-100 w-md-25 w-lg-25">
      {constactDetails.map((item, index) => (
        <ContactCard
          key={index}
          icon={item.icon}
          head={item.head}
          description={item.description}
        />
      ))}
    </div>
  );
}

export function ContactCard({ icon, head, description }) {
  return (
    <div
      className="d-flex flex-column p-4 
          position-relative justify-content-center 
          align-items-center m-3 rounded-2 hover-animate-card"
      style={{
        width: "300px",
      }}
    >
      <i className={`${icon} fs-3 mb-2 hithere`}></i>
      <h5>{head}</h5>
      <p
        className="text-center mt-3"
        style={{
          fontSize: "11px",
        }}
      >
        {description}
      </p>
    </div>
  );
}
