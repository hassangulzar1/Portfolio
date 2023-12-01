import React from "react";
import classes from "./AboutList.module.css";
import Image from "next/image";
import aimPic from "@/assets/aim.png";
export const AboutList = (props) => {
  return (
    <div className=" flex gap-6 my-20" key={props.key}>
      <div
        className={`${classes.svgIcon} w-40 h-14 sm:h-20 lg:w-28 lg:h-16 xl:w-20`}
      >
        <Image src={aimPic} alt="About List Icon" />
      </div>

      <div className=" sm:me-10">
        <h2 className={classes.date}>{props.date}</h2>
        <h2 className={classes.heading}>{props.title}</h2>
        <h2 className={classes.location}>{props.location}</h2>
        <h2 className={classes.description}>{props.description}</h2>
        <hr className=" font-bold me-9 border-gray-400" />
      </div>
    </div>
  );
};
