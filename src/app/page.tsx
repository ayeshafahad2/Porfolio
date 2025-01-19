
import React from "react";
import Profile from "./components/profile";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
