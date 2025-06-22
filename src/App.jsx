import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
// import Work from './components/Work/Work';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Experience />
    <Projects />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/work" element={<Work />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 