// app/page.tsx
"use client";
import React, { useContext, useRef, useState } from "react";
import { ThemeProviderContext } from "./context/ThemeProviderContext";
import Ticker from "./components/landingPage/ticker/Ticker";
import About from "./components/landingPage/About";
import WorkExperience from "./components/landingPage/WorkExperience";
import Projects from "./components/landingPage/projects/Projects";
import Contact from "./components/landingPage/Contact";
import { useBoolean } from "@chakra-ui/react";

export default function Home() {
  const { index, setIndex } = useContext(ThemeProviderContext)!;

  return (
    <>
      <div className="cards" id="home">
        <Ticker index={index} setIndex={setIndex} />
        <About index={index} />
        <WorkExperience />
        <Projects />
        <Contact index={index} />
      </div>
    </>
  );
}
