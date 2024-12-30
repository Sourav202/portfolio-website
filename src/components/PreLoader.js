import React, { useEffect, useState, useRef } from 'react';
import './preloader.css';

const Preloader = ({ children }) => {
  const preloaderRef = useRef(null); // Reference to preloader
  const [textIndex, setTextIndex] = useState(0); // Track which text to show
  const [isVisible, setIsVisible] = useState(true); // Control preloader visibility

  useEffect(() => {
    const textElements = document.querySelectorAll('.texts-container span');

    // Reveal text elements one-by-one with animation
    if (textElements.length > 0 && textIndex < textElements.length) {
      const interval = setInterval(() => {
        if (textElements[textIndex]) {
          textElements[textIndex].classList.add('show'); // Add 'show' class
        }
        setTextIndex((prev) => prev + 1);
      }, 600); // Reveal every 700ms

      return () => clearInterval(interval); // Cleanup interval on unmount
    } else if (textIndex >= textElements.length) {
      // Once all text is shown, initiate the wipe-up animation
      setTimeout(() => {
        if (preloaderRef.current) {
          preloaderRef.current.classList.add('hidden'); // Add hidden class
        }
        setTimeout(() => setIsVisible(false), 1000); // Hide preloader completely
      }, 1600);
    }
  }, [textIndex]);

  return (
    <>
      {isVisible && (
        <div className="preloader" ref={preloaderRef}>
          <div className="texts-container">
            <span>Welcome,</span>
            <span>to Sourav's</span>
            <span>Portfolio.</span>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default Preloader;
