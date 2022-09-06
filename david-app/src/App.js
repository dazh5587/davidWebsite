import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Accomplishments";
import Education from './components/Education';

export default function App() {
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
