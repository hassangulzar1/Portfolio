"use client";
import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import classes from "./Portfolios.module.css";
export default function Portolios({ Projects }) {
  const [filterBy, setfilterBy] = React.useState("all");
  const [inProp, setInProps] = React.useState(false);

  const targetValue = (e) => {
    setInProps(true);
    setfilterBy(e.target.id);
    setTimeout(() => {
      setInProps(false);
    }, 400);
  };

  const filteredArray = Projects.filter((items) => {
    if (filterBy === "all") {
      return items;
    } else {
      return items.id == filterBy;
    }
  });
  return (
    <>
      <div
        className={
          "ms-5 mt-6 flex flex-wrap gap-3 sm:gap-5 md:gap-7 lg:gap-10 " +
          classes.worksDiv
        }
      >
        <li
          id="all"
          className={`text-base sm:text-lg md:text-xl ${
            filterBy == "all" && classes.active
          }`}
          onClick={targetValue}
        >
          All
        </li>
        <li
          id="design"
          className={`text-base sm:text-lg md:text-xl ${
            filterBy == "design" && classes.active
          }`}
          onClick={targetValue}
        >
          Web Designs
        </li>
        <li
          id="frontend"
          className={`text-base sm:text-lg md:text-xl ${
            filterBy == "frontend" && classes.active
          }`}
          onClick={targetValue}
        >
          Front-End
        </li>
        <li
          id="fullstack"
          className={`text-base sm:text-lg md:text-xl ${
            filterBy == "fullstack" && classes.active
          }`}
          onClick={targetValue}
        >
          Full-Stack
        </li>
        <li
          id="hackathon"
          className={`text-base sm:text-lg md:text-xl ${
            filterBy == "hackathon" && classes.active
          }`}
          onClick={targetValue}
        >
          Hackathon's Projects
        </li>
      </div>

      <div className="my-20 mx-10 flex flex-wrap gap-24 justify-center">
        {filteredArray.map((items, i) => (
          <PortfolioCard
            key={i}
            inProp={inProp}
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
