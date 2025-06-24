import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState({});
  const [activeCategory, setActiveCategory] = useState('photography');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/gallery photos/manifest.json');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to load gallery manifest:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  
  const getImagePath = (category, imageName) => {
    const folderName = category === 'events' ? 'events_photo' : category;
    return `/gallery photos/${folderName}/${imageName}`;
  };
  
  if (loading) {
    return <div className="gallery-container"><p>Loading gallery...</p></div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title text-accent">Gallery</h1>
      <p className="gallery-subtitle">A collection of my creative work and personal moments.</p>
      
      <div className="gallery-filter-buttons">
        {Object.keys(images).map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <motion.div layout>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images[activeCategory]?.map((imageName, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={getImagePath(activeCategory, imageName)} 
                alt={`${activeCategory} photo ${index + 1}`} 
                loading="lazy"
              />
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
    </div>
  );
};

export default Gallery; 