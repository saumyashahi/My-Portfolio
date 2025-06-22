import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import CustomCursor from './components/CustomCursor/CustomCursor';
import './App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </>
  );
}

export default App; 