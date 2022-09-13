import './App.css';
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Accomplishments";
import Education from './components/Education';
import Particle from './components/Particles';
import Background from './components/background';
import Everything from './components/everything';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
export default function App() {

  return (
    //   <main className="text-gray-400 bg-gray-900 body-font">
    //     <Navbar />
    //     <Particle/>
    //     <About />
    //     <Education />
    //     <Experience />
    //     <Skills />
    //     <Achievements />
    // </main>
    <div>
      <Routes>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='david' element={<Everything/>}></Route>
       </Routes>
    </div>
    
  );
}
