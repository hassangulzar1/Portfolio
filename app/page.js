import Image from "next/image";
import heroImg from "../assets/homeImg.png";
import classes from "./home.module.css";
import SocialMedia from "@/components/socialmedia/SocialMedia";
import AutoType from "@/components/autotyping/AutoType";
import MainPageBtn from "@/components/mainPageButtons/MainPageBtn";
export default function Home() {
  return (
    <div className={`container mx-auto ${classes.hero}`}>
      <div className=" flex justify-between w-full h-full flex-col sm:flex-row my-auto">
        <div className=" my-auto inline-block md:w-1/2 text-center sm:text-start mx-4 sm:mx-0">
          <h6 className={classes.welcome}>Hi There!</h6>
          <h1 className={classes.im}>
            I&apos;m <span className={classes.name}>Hassan Gulzar</span>
          </h1>
          <AutoType />
          <p className={`${classes.para} my-8`}>
            I help you increase conversion and performance in every possible
            way.
          </p>
          <div className="flex gap-5 my-5 z-0">
            <MainPageBtn />
          </div>
          <div className=" my-10">
            <SocialMedia />
          </div>
        </div>
        <div className="sm:w-1/2 my-auto inline-block">
          <Image
            className="frame mx-auto object-cover object-center w-11/12 sm:w-full md:w-11/12 lg:w-3/4 xl:w-4/6 2xl:w-9/12"
            src={heroImg}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
