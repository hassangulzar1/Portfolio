import React from "react";
import classes from "./Navbar.module.css";
import { karla } from "@/fonts/font";
const Navbar = () => {
  return (
    <nav className={classes.navBackground}>
      <div className={classes.nav}>
        <input type="checkbox" className={classes["nav-check"]} />
        <div className={classes["nav-header"]}>
          <div className={classes["nav-title"]}>&#128075;</div>
        </div>
        <div className={classes["nav-btn"]}>
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={classes["nav-links"]}>
          <a target="_blank" className={` p-6`}>
            HOME
          </a>
          <a target="_blank" className={` p-6`}>
            ABOUT
          </a>
          <a target="_blank" className={` p-6`}>
            SERVICES
          </a>
          <a target="_blank" className={` p-6`}>
            PORTFOLIO
          </a>
          <a target="_blank" className={` p-6`}>
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
