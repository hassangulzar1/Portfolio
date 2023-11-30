import React from "react";
import DownNavbar from "@/components/downNavbar/DownNavbar";
import classes from "./Portfolio.module.css";
export default function loading() {
  return (
    <>
      <DownNavbar title="Portfolio" />
      <div className={classes.mainDiv}>
        <div className={`container sm:mx-auto mt-40 mx-3 `}>
          <h6
            className=" text-2xl text-gray-400 tracking-widest font-medium uppercase"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            portfolio
          </h6>
          <h1
            className=" uppercase text-6xl sm:text-7xl font-bold mt-4"
            style={{ fontFamily: "var(--font-poppins)", color: "#130F49" }}
          >
            Recent Work
          </h1>
        </div>
      </div>
    </>
  );
}
