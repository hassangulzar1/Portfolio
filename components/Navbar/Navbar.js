import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={`${classes.navBackground} z-10`}>
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
          <Link href="/" className={` p-6`}>
            HOME
          </Link>
          <Link href="/about" className={` p-6`}>
            ABOUT
          </Link>
          <a className={` p-6`}>SERVICES</a>
          <a className={` p-6`}>PORTFOLIO</a>
          <a className={` p-6`}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
