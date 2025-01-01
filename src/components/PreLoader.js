import React, { useEffect, useState, useRef } from 'react';
import './preloader.css';

const Preloader = ({ children }) => {
  const preloaderRef = useRef(null); 
  const [textIndex, setTextIndex] = useState(0); 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textElements = document.querySelectorAll('.texts-container span');

    if (textElements.length > 0 && textIndex < textElements.length) {
      const interval = setInterval(() => {
        if (textElements[textIndex]) {
          textElements[textIndex].classList.add('show'); 
        }
        setTextIndex((prev) => prev + 1);
      }, 600); 

      return () => clearInterval(interval); 
    } else if (textIndex >= textElements.length) {
      setTimeout(() => {
        if (preloaderRef.current) {
          preloaderRef.current.classList.add('hidden'); 
        }
        setTimeout(() => setIsVisible(false), 1000); 
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