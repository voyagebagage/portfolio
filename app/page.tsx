// app/page.tsx
"use client";
import React, { useContext, useRef, useState } from "react";
import ThemeProviderContext from "./context/ThemeProviderContext";
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
  const AboutRef = useRef<HTMLElement | null>(null);

  // const { ref, inView, entry } = useInView({
  //   threshold: 1,
  // });
  // const [onPointingArrow, setOnPointingArrow] = useState<boolean>(false);
  // // const { scrollSup850 } = usePositionFromTop();
  // const animation = useAnimation();

  // const inViewAnimation = {
  //   x: 500,
  //   y: 0,
  //   rotate: 180,
  //   // transition: { type: "spring", duration: 1, bounce: 0.1, delay: 0.3 },
  //   transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 },
  // };

  // const outOfViewAnimation = {
  //   x: 1000,
  //   y: 0,
  //   // transition: { type: "spring", duration: 1, bounce: 0.2 },
  //   transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 },
  // };

  // // Use the same animations for all sections or define specific ones
  // const sectionAnimations = {
  //   inViewAnimation: inViewAnimation,
  //   outOfViewAnimation: outOfViewAnimation,
  // };

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

        <About index={index} ref={(node) => (AboutRef.current = node)} />

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
