"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import classes from "./Auto.module.css";
export default function AutoType() {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer",
      "Problem Solver",
      "Mobile Developer",
      "Freelancer",
      "Tech enthusiast",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  });
  return (
    <h1 className={classes.autoTyping}>
      A <span style={{ color: "#130f49" }}>{text}</span>
      <span>
        <Cursor />
      </span>
    </h1>
  );
}
