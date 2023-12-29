import React, { useState } from "react";
import CSS from "../../../../../../css/contact.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="Form h-100 mb-4 w-100 w-md-25 w-lg-25 p-sm-4">
        <div>
          <label className="fs-4 fw-bold w-100">
            Your Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="fs-4 fw-bold mt-4 w-100">
            Your Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="fs-4 mt-4 w-100 fw-bold">
            Your Phone Number
            <input
              type="number"
              name="phone"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          {/* <button onClick={console.log(formData)}>Submit</button> */}
        </div>
      </div>
    </>
  );
}
