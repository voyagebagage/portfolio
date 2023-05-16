// app/page.tsx
"use client";

import React, { lazy, Suspense } from "react";
// import Ticker from '../components/Ticker';
// import About from '../components/About';
// import WorkExperience from "./components/landingPage/WorkExperience";
// import Projects from "./components/landingPage/projects/Projects";
// import Contact from "./components/landingPage/Contact";

const WorkExperience = lazy(
  () => import("./components/landingPage/WorkExperience")
);
const Projects = lazy(
  () => import("./components/landingPage/projects/Projects")
);
const Contact = lazy(() => import("./components/landingPage/Contact"));
import Ticker from "./components/landingPage/ticker/Ticker";
import About from "./components/landingPage/About";
// import { useLoadOnScroll } from "./customHooks/useLoadOnScroll";
import { useVisibility } from "./customHooks/useVisibility";

export default function Home() {
  // const areComponentsVisible = useLoadOnScroll();
  const { isVisible, ref } = useVisibility(0.1); // Adjust the threshold as needed

  return (
    <div className="cards" id="home">
      <Ticker />
      <div ref={ref}>
        <About />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {isVisible && <WorkExperience />}
        {isVisible && <Projects />}
        {isVisible && <Contact />}
      </Suspense>
    </div>
  );
}
