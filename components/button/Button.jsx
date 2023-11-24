import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.background }}
      className={`${classes.btn} ${classes[props.hover]}`}
      role="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
