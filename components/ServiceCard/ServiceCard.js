import { FaLaptopCode } from "react-icons/fa6";
import { BsFillFileCodeFill } from "react-icons/bs";
import { LiaPhotoVideoSolid } from "react-icons/lia";

export default function ServiceCard({ iconName }) {
  let icon;

  switch ("laptop") {
    case "laptop":
      icon = <FaLaptopCode />;
      break;
    case "phone":
      icon = <BsFillFileCodeFill />;
      break;
    case "heart":
      icon = <LiaPhotoVideoSolid />;
      break;
    default:
      icon = null;
  }

  return (
    <div className=" w-2/5 flex flex-col">
      <h1
        className=" text-6xl mx-auto p-3"
        style={{
          backgroundColor: "#D9F4FE",
          borderRadius: "10px",
          color: "#58CFFD",
        }}
      >
        {icon}
      </h1>
      <h1
        className="text-center mt-8 text-3xl"
        style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 500,
        }}
      >
        Web Development
      </h1>
    </div>
  );
}
