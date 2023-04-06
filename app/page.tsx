// app/page.tsx
"use client";
import React, { useContext } from "react";
import ThemeProviderContext from "./context/ThemeProviderContext.tsx";

import { Link } from "@chakra-ui/next-js";
import { Box, IconButton, Stack, Text } from "@chakra-ui/react";
import Contact from "./components/landingPage/Contact";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import Ticker from "./components/landingPage/ticker/Ticker";
import { motion } from "framer-motion";
import WorkExperience from "./components/landingPage/WorkExperience";
import Projects from "./components/landingPage/Projects";
import About from "./components/landingPage/About";

export default function Home() {
  const themeProviderContext = useContext(ThemeProviderContext);
  // Access the exampleProp from the context
  const contextProps = themeProviderContext;
  const showSpinningBox = themeProviderContext?.showSpinningBox;
  console.log("HERE HERE HERE", contextProps, showSpinningBox);

  return (
    <>
      <Ticker />
      <About />
      <div className="cards">
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

{
  /* <h1 className="text-3xl font-bold underline">hi </h1> */
}
{
  /* <div className="w-full">
  <HeroHeader showSpinningBox={showSpinningBox} />
</div> */
}
