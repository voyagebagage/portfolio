// app/page.tsx
"use client";
import React from "react";

import Ticker from "./components/landingPage/ticker/Ticker";
import About from "./components/landingPage/About";
import WorkExperience from "./components/landingPage/WorkExperience";
import Projects from "./components/landingPage/projects/Projects";
import Contact from "./components/landingPage/Contact";

export default function Home() {
  <>
    <div className="cards" id="home">
      <Ticker />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  </>;
}
