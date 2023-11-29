import React from "react";
import classes from "./Form.module.css";

export default function Form() {
  return (
    <form className={classes.form}>
      <div className={classes.flex}>
        <label>
          <input
            className={classes.input}
            type="text"
            placeholder=""
            required=""
          />
          <span>first name</span>
        </label>

        <label>
          <input
            className={classes.input}
            type="text"
            placeholder=""
            required=""
          />
          <span>last name</span>
        </label>
      </div>

      <label>
        <input
          className={classes.input}
          type="email"
          placeholder=""
          required=""
        />
        <span>email</span>
      </label>

      <label>
        <input
          className={classes.input}
          placeholder=""
          type="tel"
          required=""
        />
        <span>contact number</span>
      </label>
      <label>
        <textarea
          className={classes.input01}
          placeholder=""
          rows="3"
          required=""
        ></textarea>
        <span>message</span>
      </label>

      <button href="#" className={classes.fancy}>
        <span className={classes["top-key"]}></span>
        <span className={classes.text}>submit</span>
        <span className={classes["bottom-key-1"]}></span>
        <span className={classes["bottom-key-2"]}></span>
      </button>
    </form>
  );
}
