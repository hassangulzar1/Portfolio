import React from "react";
import classes from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.waves}>
        <div className={`${classes.wave} ${classes.wave1}`}></div>
        <div className={`${classes.wave} ${classes.wave2}`}></div>
        <div className={`${classes.wave} ${classes.wave3}`}></div>
        <div className={`${classes.wave} ${classes.wave4}`}></div>
      </div>
      <ul className={classes["social_icon"]}>
        <li>
          <a
            href="https://www.linkedin.com/in/hassan-gulzar-256292267/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/hassangulzar1" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/shkhassan14/" target="_blank">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/hassan.gulzar.56614/"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
      </ul>

      <ul className={classes.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <p> &copy;2023 Hassan Gulzar | All Rights Reserved</p>
    </footer>
  );
}
