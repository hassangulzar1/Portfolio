import React from "react";
import DownNavbar from "@/components/downNavbar/DownNavbar";
import classes from "./about.module.css";
import Button from "@/components/button/Button";
const page = () => {
  return (
    <>
      <DownNavbar title="About Me" />
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
          <h1>Skills</h1>
        </div>
      </div>
    </>
  );
};

export default page;
