import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { Analytics } from '@vercel/analytics/react';
import './App.css';

// Only show loader on first load (not on internal navigation)
const useInitialLoader = () => {
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      const timer = setTimeout(() => setLoading(false), 1800);
      isFirstLoad.current = false;
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return loading;
};

const HomePage = ({ setIsModalOpen }) => {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    // Fetch view count from countapi.xyz
    fetch('https://api.countapi.xyz/hit/saumyashahi-portfolio/views')
      .then(res => res.json())
      .then(data => setViewCount(data.value));
  }, []);

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

// Enhanced ScrollToTop: scrolls instantly to top before paint
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loading = useInitialLoader();
  if (loading) return <Loader />;
  return (
    <ThemeProvider>
      <div className="App">
        <CustomCursor />
        <Navbar setIsModalOpen={setIsModalOpen} />
        <ScrollToTop />
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
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App; 