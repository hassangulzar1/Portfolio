import React from "react";
import classes from "./DownNavbar.module.css";
const DownNavbar = (props) => {
  return (
    <div className={classes.start}>
      <div className={classes.bottomNavbar}>
        <div className=" w-9/12 text-center">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default DownNavbar;
