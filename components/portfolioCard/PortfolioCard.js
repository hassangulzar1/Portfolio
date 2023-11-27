import React from "react";
import classes from "./PortfolioCard.module.css";

export default function PortfolioCard() {
  return (
    <article className={classes["article-wrapper"]}>
      <div
        className={`${classes["rounded-lg"]} ${classes["container-project"]}`}
      ></div>
      <div className={classes["project-info"]}>
        <div className={classes["flex-pr"]}>
          <div
            className={`${classes["project-title"]} ${classes["text-nowrap"]}`}
          >
            Project
          </div>
          <div className={classes["project-hover"]}>
            <svg
              style={{ color: "black" }}
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              color="black"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <line y2="12" x2="19" y1="12" x1="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
        <div className={classes.types}>
          <span
            style={{
              backgroundColor: "rgba(165, 96, 247, 0.43)",
              color: "rgb(85, 27, 177)",
            }}
            className={classes["project-type"]}
          >
            • Analytics
          </span>
          <span className={classes["project-type"]}>• Dashboards</span>
        </div>
      </div>
    </article>
  );
}