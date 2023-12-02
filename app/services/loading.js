import React from "react";
import DownNavbar from "@/components/downNavbar/DownNavbar";
export default function loading() {
  return (
    <div style={{ marginBottom: "300px" }}>
      <DownNavbar title="Services" />
      {/* <!-- ADVERTISERS SERVICE CARD --> */}
      <h1
        className=" text-center my-9 text-6xl font-bold"
        style={{
          fontFamily: "var(--font-poppins)",
          color: "#130F49",
        }}
      >
        What I Do?
      </h1>
      <p
        className=" text-center text-3xl"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Loading..
      </p>
    </div>
  );
}
