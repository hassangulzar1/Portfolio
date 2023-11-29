import React from "react";

export default function ContactDetail(props) {
  return (
    <div className=" flex flex-col my-3 w-72 lg:w-44 xl:w-50">
      {props.icon}
      <h1
        className="text-lg font-bold mt-3 text-center"
        style={{
          color: "#34A1CD",
          fontFamily: "var(--font-poppins)",
        }}
      >
        {props.title}
      </h1>
      <p
        className=" text-xl text-center mt-2"
        style={{ fontFamily: "var(--font-karla)" }}
      >
        {props.desc}
      </p>
    </div>
  );
}
