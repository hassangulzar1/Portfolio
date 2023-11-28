"use client";
import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import classes from "./Portfolios.module.css";
export default function Portolios({ Projects }) {
  const [filterBy, setfilterBy] = React.useState("all");

  const targetValue = (e) => {
    setfilterBy(e.target.id);
  };

  const filteredArray = Projects.filter((items) => items.id == filterBy);

  return (
    <>
      <div className={"ms-5 mt-6 flex gap-7 sm:gap-10 " + classes.worksDiv}>
        <li
          id="all"
          className={`text-xl ${filterBy == "all" && classes.active}`}
          onClick={targetValue}
        >
          All
        </li>
        <li
          id="design"
          className={`text-xl ${filterBy == "design" && classes.active}`}
          onClick={targetValue}
        >
          Web Designs
        </li>
        <li
          id="frontend"
          className={`text-xl ${filterBy == "frontend" && classes.active}`}
          onClick={targetValue}
        >
          Front-End
        </li>
        <li
          id="fullstack"
          className={`text-xl ${filterBy == "fullstack" && classes.active}`}
          onClick={targetValue}
        >
          Full-Stack
        </li>
      </div>
      <div className="my-20 mx-10 flex flex-wrap gap-24 justify-center">
        {filterBy != "all" &&
          filteredArray.map((items) => (
            <PortfolioCard
              title={items.name}
              imagePath={items.image.fields.file.url}
              firstTech={items.firstTechnology}
              secondTech={items.secondTechnology}
              link={items.link}
            />
          ))}
        {filterBy === "all" &&
          Projects.map((items) => (
            <PortfolioCard
              title={items.name}
              imagePath={items.image.fields.file.url}
              firstTech={items.firstTechnology}
              secondTech={items.secondTechnology}
              link={items.link}
            />
          ))}
      </div>
    </>
  );
}
