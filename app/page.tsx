// app/page.tsx
"use client";
import React from "react";

import Ticker from "./components/landingPage/ticker/Ticker";
import About from "./components/landingPage/About";
import WorkExperience from "./components/landingPage/WorkExperience";
import Projects from "./components/landingPage/projects/Projects";
import Contact from "./components/landingPage/Contact";

import { useColor } from "./customHooks/useColor";

export default function Home() {
  const index = useColor();
  // console.log("index", index);

  return (
    <>
      <div className="cards" id="home">
        {/* <ProfileHeader index={index} /> */}
        <Ticker index={index} />
        <About index={index} />
        <WorkExperience />
        <Projects index={index} />
        <Contact index={index} />
      </div>
    </>
  );
}
