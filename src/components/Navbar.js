import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import Lottie from 'lottie-react';
import ani from '../animations/animationMode.json';
import './navbar.css'; 
import './navbarMobile.css'; 

const Navbar = ({ theme, setTheme, currentSection, setCurrentSection }) => {
  const lottieRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 1024;
      setIsMobile(mobileView);

      if (!mobileView) {
        setIsMenuOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentSection('home'); 
  }, [setCurrentSection]);

  useEffect(() => {
    if (lottieRef.current) {
      const segments = theme === 'light' ? [20, 0] : [0, 20];
      lottieRef.current.playSegments(segments, true); 
    }
  }, [theme]);

  const toggle_mode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);

      newTheme === 'light'
        ? lottieRef.current.playSegments([20, 0], true)
        : lottieRef.current.playSegments([0, 20], true);
    }
  };

  const handleButtonClick = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleTextClick = () => {
    const textElement = document.querySelector('.navbar span');
    if (textElement) {
      textElement.classList.add('hop');
      setTimeout(() => textElement.classList.remove('hop'), 500);
    }
    confetti({
      particleCount: 150,
      angle: 300,
      spread: 90,
      origin: { x: 0.1, y: 0.1 },
      gravity: 0.5,
      scalar: 1.2,
      colors: ['#ff0', '#f00', '#0f0', '#00f'],
      shapes: ['circle', 'square'],
    });
  };

  return (
    <div className="white-rectangle">
      <div id="navbar" className={`navbar container-${theme} ${isMobile ? 'mobile' : ''}`}>
        <span onClick={handleTextClick} style={{ cursor: 'pointer' }}>
          Sourav Minhas
        </span>
        {isMobile ? (
          <>
            <button
              className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
              onClick={toggleMenu}
            >
              <span className="bar"></span>
            </button>

            <nav className={`mobile-nav ${isMenuOpen ? 'is-active' : ''}`}>
              <button onClick={() => handleButtonClick('home')}>Home</button>
              <button onClick={() => handleButtonClick('projects')}>Projects</button>
              <button onClick={() => handleButtonClick('experience')}>Experience</button>
              <button onClick={() => handleButtonClick('about')}>About</button>
              <button onClick={() => handleButtonClick('contact')}>Contact</button>
            </nav>
          </>
        ) : (
          <ul className="desktop-nav">
            <li
              onClick={() => handleButtonClick('home')}
              className={currentSection === 'home' ? 'active' : ''}
            >
              Home
            </li>
            <li
              onClick={() => handleButtonClick('projects')}
              className={currentSection === 'projects' ? 'active' : ''}
            >
              Projects
            </li>
            <li
              onClick={() => handleButtonClick('experience')}
              className={currentSection === 'experience' ? 'active' : ''}
            >
              Experience
            </li>
            <li
              onClick={() => handleButtonClick('about')}
              className={currentSection === 'about' ? 'active' : ''}
            >
              About
            </li>
            <li
              onClick={() => handleButtonClick('contact')}
              className={currentSection === 'contact' ? 'active' : ''}
            >
              Contact
            </li>
          </ul>
        )}
        <div className="toggle-icon" onClick={toggle_mode} style={{ cursor: 'pointer' }}>
          <Lottie
            lottieRef={lottieRef}
            animationData={ani}
            loop={false}
            autoplay={false}
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;