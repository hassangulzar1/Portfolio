import { FaLaptopCode } from "react-icons/fa6";
import { BsFillFileCodeFill } from "react-icons/bs";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { FaBugSlash } from "react-icons/fa6";
import classes from "./ServiceCard.module.css";
export default function ServiceCard({
  iconName,
  title,
  desciption,
  iconBackground,
  iconColor,
}) {
  let icon;

  switch (iconName) {
    case "webdev":
      icon = <FaLaptopCode />;
      break;
    case "appdev":
      icon = <BsFillFileCodeFill />;
      break;
    case "videoediting":
      icon = <LiaPhotoVideoSolid />;
      break;
    case "errorfixing":
      icon = <FaBugSlash />;
      break;
    default:
      icon = null;
  }

  return (
    <div
      className={
        `flex flex-col my-4 px-10 py-10 text-center gap-6 ` + classes.hover
      }
      style={{ width: "500px" }}
    >
      <h1
        className=" text-6xl mx-auto p-3"
        style={{
          backgroundColor: iconBackground,
          borderRadius: "10px",
          color: iconColor,
        }}
      >
        {icon}
      </h1>
      <h1
        className="text-center mt-8 text-3xl"
        style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 600,
        }}
      >
        {title}
      </h1>
      <hr style={{ margin: "0 180px", borderColor: iconColor }} />
      <p
        className=" mt-6 text-xl text-gray-400"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {desciption}
      </p>
    </div>
  );
}
