import React from "react";
import classes from "./Progress.module.css";
const ProgressBars = ({ barTitle, bar, barLength }) => {
  return (
    <div className={`${classes.container} my-5 mx-5`}>
      <div className=" flex justify-between">
        <h2 className={classes.h2}>{barTitle}</h2>
        <h2 className={classes.h2}>{barLength}</h2>
      </div>
      <div className={`${classes.progress} ${classes[bar]}`}>
        <div className={classes["progress-bar"]}></div>
      </div>
    </div>
  );
};

export default ProgressBars;
