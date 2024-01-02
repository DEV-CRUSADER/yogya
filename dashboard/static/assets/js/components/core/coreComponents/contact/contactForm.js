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
      <form className="mb-4 w-sm-100 w-md-75 w-lg-50 w-xl-50 p-sm-4
        d-flex flex-column
      ">
        <div>
          <label className="fs-5 w-100">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="eg. Aman Malik"
            />
          </label>
        </div>
        <div>
          <label className="fs-5 mt-4 w-100">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="eg. name@domain.com"
            />
          </label>
        </div>
        <div>
          <label className="fs-5 mt-4 w-100">
            Phone number
            <input
              type="number"
              name="phone"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="eg. +91 xxxxx xxxxx"
            />
          </label>
        </div>
        <div>
          <label className="fs-5 mt-4 w-100">
            Message
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              className="form-control"
              style={{
                resize: "none"
              }}
              placeholder="Type your message here....."
            ></textarea>
          </label>
        </div>
        <button onClick={() => console.log(formData)} className="btn btn-dark mt-3">
          Submit
        </button>
      </form>
    </>
  );
}
