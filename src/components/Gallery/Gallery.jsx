import React from 'react';
import './Gallery.css';

const galleryItems = [
  
  
  { id: 'p1', image: '/gallery photos/photography/phtography1.jpg', title: 'IIITK Sunset' },
   { id: 'p2', image: '/gallery photos/photography/photo3.jpg', title: 'Hostel View' },
  { id: 'e4', image: '/gallery photos/events_photo/anchoring.JPG', title: 'Anchoring @ Apoorv' },
 { id: 'e1', image: '/gallery photos/events_photo/infrontofiitb.jpg', title: 'At IIT Bombay' },
  { id: 'e6', image: '/gallery photos/events_photo/teamevents.JPG', title: 'GDSC Team' },
//   { id: 'c1', image: '/gallery photos/culturals/music saumya.jpg', title: 'Music Harmony' },
  { id: 'e2', image: '/gallery photos/events_photo/iitb_room.jpg', title: 'Summer School' },
  { id: 'e5', image: '/gallery photos/events_photo/auditions.JPG', title: 'Audition Day' },
 { id: 'p3', image: '/gallery photos/photography/photo2.jpg', title: 'Reflections' },
   { id: 'e3', image: '/gallery photos/events_photo/summer_school.jpg', title: 'Summer School Group' },
  
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title text-accent">Photowall</h1>
      <div className="photowall-grid">
        {galleryItems.map(item => (
          <div key={item.id} className="photowall-item">
            <img src={item.image} alt={item.title} />
            <div className="photowall-caption">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
        <div className="photowall-item placeholder">
          <h3>More creations coming soon...</h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 