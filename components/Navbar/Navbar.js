"use client";
import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <nav className={`${classes.navBackground} z-10`}>
      <div className={classes.nav}>
        <input
          type="checkbox"
          checked={showDropdown}
          className={classes["nav-check"]}
        />
        <div className={classes["nav-header"]}>
          <div className={classes["nav-title"]}>&#128075;</div>
        </div>
        <div
          className={classes["nav-btn"]}
          onClick={() => setshowDropdown((prevState) => !prevState)}
        >
          <label htmlFor={classes["nav-check"]}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={classes["nav-links"]}>
          <Link
            href="/"
            onClick={() => setshowDropdown(false)}
            className={`${pathname === "/" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setshowDropdown(false)}
            className={`${pathname === "/about" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            onClick={() => setshowDropdown(false)}
            className={`${pathname === "/services" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            SERVICES
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setshowDropdown(false)}
            className={`${pathname === "/portfolio" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            onClick={() => setshowDropdown(false)}
            className={`${pathname === "/contact" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
