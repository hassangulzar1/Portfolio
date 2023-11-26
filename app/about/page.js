import React from "react";
import DownNavbar from "@/components/downNavbar/DownNavbar";
import classes from "./about.module.css";
import Button from "@/components/button/Button";
import ProgressBars from "@/components/progressbars/ProgressBars";
const page = () => {
  return (
    <>
      <DownNavbar title="About Me" />
      {/* About my Self Box  */}
      <div className={classes.bg}>
        <div className=" w-4/5" style={{ backgroundColor: "#FFFFFF" }}>
          <h1>About MySelf</h1>
          <p className=" sm:mx-8 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-52">
            Hey there! I'm a full-stack web developer who loves to solve
            problems and is passionate about LeetCode.
          </p>
          <div className=" w-3/4 sm:w-2/5 md:w-1/3 lg:w-5/12 xl:w-1/3 2xl:w-1/4 mx-auto my-7">
            <Button background="#130f49" hover="darkBlueHover">
              DOWNLOAD RESUME
            </Button>
          </div>
          <hr style={{ margin: "0px 100px", color: "#130f49" }} />
          <div className="mx-5 flex justify-center flex-wrap">
            <ProgressBars
              barTitle="HTML"
              bar="progress-designing"
              barLength="80%"
            />
            <ProgressBars
              barTitle="Css"
              bar="progress-frontend"
              barLength="70%"
            />
            <ProgressBars
              barTitle="JavaScript"
              bar="progress-javascript"
              barLength="70%"
            />
            <ProgressBars
              barTitle="typeScript"
              bar="progress-typescript"
              barLength="65%"
            />
            <ProgressBars
              barTitle="React Js"
              bar="progress-reactjs"
              barLength="75%"
            />
            <ProgressBars
              barTitle="Next Js"
              bar="progress-nextjs"
              barLength="65%"
            />
            <ProgressBars
              barTitle="Node Js"
              bar="progress-nodejs"
              barLength="50%"
            />
            <ProgressBars
              barTitle="Express Js"
              bar="progress-expressjs"
              barLength="50%"
            />
            <ProgressBars
              barTitle="mongoDb"
              bar="progress-mongodb"
              barLength="70%"
            />
            <ProgressBars
              barTitle="React Native"
              bar="progress-reactnative"
              barLength="50%"
            />
            <h3
              className=" text-2xl text-center mx-3 sm:mx-6 my-6 font-medium"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo
              omnis consectetur hic reiciendis nostrum non tempore vero
              necessitatibus?
            </h3>
          </div>
        </div>
      </div>

      {/* About my Education  */}
      <div className=" container"></div>
    </>
  );
};

export default page;
