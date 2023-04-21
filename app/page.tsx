// app/page.tsx
"use client";
import React, { useContext } from "react";
import ThemeProviderContext from "./context/ThemeProviderContext";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import Contact from "./components/landingPage/Contact";
import Ticker from "./components/landingPage/ticker/Ticker";
import { motion } from "framer-motion";
import WorkExperience from "./components/landingPage/WorkExperience";
import Projects from "./components/landingPage/projects/Projects";
import About from "./components/landingPage/About";
import ProfileHeader from "./components/landingPage/profileHeader/ProfileHeader";

export default function Home() {
  const { index, setIndex, showSpinningBox } =
    useContext(ThemeProviderContext)!;
  const [switchAbout, setSwitchAbout] = useBoolean();

  return (
    <>
      <Ticker
        index={index}
        setIndex={setIndex}
        setSwitchAbout={setSwitchAbout}
        switchAbout={switchAbout}
      />
      <div className="cards">
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
