import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', updatePosition);

        document.querySelectorAll('a, button, input, textarea, [role="button"]')
            .forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.querySelectorAll('a, button, input, textarea, [role="button"]')
                .forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
        };
    }, []);

    return (
        <div 
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default CustomCursor; 