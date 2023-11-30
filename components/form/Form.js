import React from "react";
import classes from "./Form.module.css";
export default function Form() {
  return (
    <form className={classes.form}>
      <input type="text" placeholder="Name" className={classes.input} />
      <input type="text" placeholder="Email" className={classes.input} />
      <input type="text" placeholder="Subject" className={classes.input} />
      <textarea
        placeholder="Create a message here"
        name=""
        cols="30"
        rows="3"
        className={classes.input}
      />
      <button className={classes.cta} type="submit">
        <span>Send</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </form>
  );
}
