import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Work from './components/Work/Work';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { ThemeProvider } from './contexts/ThemeContext';
import Loader from './components/Loader';
import Modal from './components/Modal/Modal';
import './App.css';

const HomePage = ({ setIsModalOpen }) => {
  const [loading, setLoading] = useState(true);
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    // Simulate loading for loader animation
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fetch view count from countapi.xyz
    fetch('https://api.countapi.xyz/hit/saumyashahi-portfolio/views')
      .then(res => res.json())
      .then(data => setViewCount(data.value));
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <section className="parallax-section" style={{margin: '0 auto 0 auto'}}>
        <div className="simple-quote-content">
          <blockquote className="simple-parallax-quote">
            “<br />If your dreams for the future don't scare you, maybe you're not thinking big enough.<br />
            <span className="parallax-quote-accent">Constantly challenge yourself—don't just exist, LIVE.</span>”
          </blockquote>
        </div>
      </section>
    </>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar setIsModalOpen={setIsModalOpen} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage setIsModalOpen={setIsModalOpen} />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ThemeProvider>
  );
}

export default App; 