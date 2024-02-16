import React, { useState, useEffect } from "react";
import validator from "validator";

import { APICaller } from "../../scripts/server";
import { Notyf } from 'notyf';

import 'notyf/notyf.min.css';
import "../../../../../../css/contact.css";

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'error',
      background: '#e74c3c',
      icon: {
        className: 'fas fa-exclamation-circle',
        tagName: 'span',
        color: '#fff'
      },
      dismissible: true
    },
    {
      type: 'success',
      background: '#2ecc71',
      icon: {
        className: 'fas fa-check-circle',
        tagName: 'span',
        color: '#fff'
      },
      dismissible: true
    }
  ]
});

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.phone_number === "") {
      notyf.error('Please fill out the form');
      return;
    }
    if (!validator.isEmail(formData.email)){
      notyf.error('Please enter a valid email');
      return;
    }
    sendMail();
  };

  function sendMail() {
    APICaller.SendContactUsEmail(formData).then((res) => {
      if (res.status) {
        notyf.success(res.message);
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      } else {
        notyf.error('Something went wrong');
      }
    });
  }

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
              placeholder="eg. Your name"
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
              name="phone_number"
              inputMode="numeric"
              value={formData.phone_number}
              onChange={handleChange}
              className="form-control"
              placeholder="eg. xxxxxxxxxx"
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
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <button onClick={onSubmit} className="btn btn-dark mt-3">
          Submit
        </button>
      </form>
    </>
  );
}
