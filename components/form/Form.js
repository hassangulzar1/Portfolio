"use client";
import React, { useState } from "react";
import classes from "./Form.module.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  UserEmail: "",
  subject: "",
  message: "",
};
export default function Form() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setloading] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  const submitHandler = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .send(
        "service_mhhcs07",
        "template_cyto9z8",
        formData,
        "gub_AWSsali67atst"
      )
      .then(
        (response) => {
          toast.success(
            "Your Message Send SUCCESSFULLY!",
            response.status,
            response.text
          );
          setFormData(initialState);
        },
        (err) => {
          toast.error("FAILED...", err);
        }
      )
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        value={formData.name}
        onChange={handleInputChange}
        name="name"
        type="text"
        required
        placeholder="Name"
        className={classes.input}
      />
      <input
        value={formData.UserEmail}
        onChange={handleInputChange}
        name="UserEmail"
        type="text"
        required
        placeholder="Email"
        className={classes.input}
      />
      <input
        value={formData.subject}
        onChange={handleInputChange}
        name="subject"
        type="text"
        required
        placeholder="Subject"
        className={classes.input}
      />
      <textarea
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Create a message here"
        required
        name="message"
        cols="30"
        rows="3"
        className={classes.input}
      />
      <button className={`${classes.cta}`} type="submit" disabled={loading}>
        <span>{loading ? "Sending..." : "Send"}</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </form>
  );
}
