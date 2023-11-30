"use client";
import React from "react";
import classes from "./Button.module.css";
import { useRouter } from "next/navigation";
const Button = (props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(props.path)}
      style={{ backgroundColor: props.background }}
      className={`${classes.btn} ${classes[props.hover]}`}
      role="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
