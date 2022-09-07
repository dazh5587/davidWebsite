import './App.css';
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Accomplishments";
import Education from './components/Education';
import Particle from './components/Particles';


export default function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Particle/>
        <Navbar />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
    </main>
  );
}
