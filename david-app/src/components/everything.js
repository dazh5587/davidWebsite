import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievements from "./Accomplishments";
import Education from './Education';
import Particle from './Particles';
import Background from './background';
export default function Everything() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Achievements />
        </main>
    );
  }
  