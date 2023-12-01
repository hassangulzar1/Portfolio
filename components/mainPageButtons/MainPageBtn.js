"use client";
import React from "react";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
export default function MainPageBtn() {
  const router = useRouter();
  return (
    <>
      <Button
        background="#130F49"
        hover="darkBlueHover"
        onClick={() => router.push("/portfolio")}
      >
        See my work
      </Button>
      <Button
        background="#34a1cd"
        hover="lightBlueHover"
        onClick={() => router.push("/contact")}
      >
        Start A project
      </Button>
    </>
  );
}
