import React from "react";
import classes from "./Progress.module.css";
const ProgressBars = () => {
  return (
    <div className="my-5">
      <div className={classes.container}>
        <div className={`${classes.progress} ${classes["progress-moved"]}`}>
          <div className={classes["progress-bar"]}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
