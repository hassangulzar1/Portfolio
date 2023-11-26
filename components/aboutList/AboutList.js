import React from "react";
import classes from "./AboutList.module.css";

export const AboutList = (props) => {
  return (
    <div className=" flex gap-6 my-20">
      <div
        className={`${classes.svgIcon} w-40 h-14 sm:h-20 lg:w-28 lg:h-16 xl:w-20`}
      >
        <svg className={classes["svg-icon"]} viewBox="0 0 20 20">
          <path d="M17.659,9.597h-1.224c-0.199-3.235-2.797-5.833-6.032-6.033V2.341c0-0.222-0.182-0.403-0.403-0.403S9.597,2.119,9.597,2.341v1.223c-3.235,0.2-5.833,2.798-6.033,6.033H2.341c-0.222,0-0.403,0.182-0.403,0.403s0.182,0.403,0.403,0.403h1.223c0.2,3.235,2.798,5.833,6.033,6.032v1.224c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403v-1.224c3.235-0.199,5.833-2.797,6.032-6.032h1.224c0.222,0,0.403-0.182,0.403-0.403S17.881,9.597,17.659,9.597 M14.435,10.403h1.193c-0.198,2.791-2.434,5.026-5.225,5.225v-1.193c0-0.222-0.182-0.403-0.403-0.403s-0.403,0.182-0.403,0.403v1.193c-2.792-0.198-5.027-2.434-5.224-5.225h1.193c0.222,0,0.403-0.182,0.403-0.403S5.787,9.597,5.565,9.597H4.373C4.57,6.805,6.805,4.57,9.597,4.373v1.193c0,0.222,0.182,0.403,0.403,0.403s0.403-0.182,0.403-0.403V4.373c2.791,0.197,5.026,2.433,5.225,5.224h-1.193c-0.222,0-0.403,0.182-0.403,0.403S14.213,10.403,14.435,10.403"></path>
        </svg>
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
