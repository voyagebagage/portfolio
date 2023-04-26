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
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ArrowPointingCards from "./components/ArrowPointingCards";

export default function Home() {
  const { index, setIndex, showSpinningBox } =
    useContext(ThemeProviderContext)!;
  const [switchAbout, setSwitchAbout] = useBoolean();

  return (
    <>
      <div className="cards" id="home">
        <Ticker
          index={index}
          setIndex={setIndex}
          setSwitchAbout={setSwitchAbout}
          switchAbout={switchAbout}
          // ref={ref}
        />

        <About index={index} />

        <WorkExperience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

{
  /* <div className="w-full">
  <HeroHeader showSpinningBox={showSpinningBox} />
</div> */
}
