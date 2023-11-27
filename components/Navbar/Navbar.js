"use client";
import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
          <Link
            href="/"
            className={`${pathname === "/" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`${pathname === "/about" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className={`${pathname === "/services" ? classes["active"] : ""}`}
            style={{ padding: "20px" }}
          >
            SERVICES
          </Link>
          <Link href="" style={{ padding: "20px" }}>
            PORTFOLIO
          </Link>
          <Link href="" style={{ padding: "20px" }}>
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
