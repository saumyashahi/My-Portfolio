import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </>
  );
}

export default App; 