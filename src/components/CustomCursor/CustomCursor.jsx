import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { theme } = useTheme();

    // Generate SVG with theme-aware colors
    const generateCursorSVG = (isHovering, strokeColor) => {
        if (isHovering) {
            return `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M8.782.852l-3.535 7.07 7.07 3.535 2.122-11.312-5.657.707zm-2.121 9.9l-4.242 4.243 8.484 8.484 4.242-4.242-8.484-8.485z" fill="%23D988B9" stroke="${strokeColor}" stroke-width="1"/></svg>`;
        } else {
            return `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M4 2v24l8-10h12L4 2z" fill="%23D988B9" stroke="${strokeColor}" stroke-width="1.5"/></svg>`;
        }
    };

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', updatePosition);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Get stroke color based on theme
    const strokeColor = theme === 'dark' ? '%23ffffff' : '%23000000';

    return (
        <div
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
            style={{
                left: position.x,
                top: position.y,
                backgroundImage: `url('${generateCursorSVG(isHovering, strokeColor)}')`
            }}
        />
    );
};

export default CustomCursor; 