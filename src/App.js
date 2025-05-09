import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Preloader from './components/PreLoader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience'; 
import { allImages } from './components/preloadImages';

function App() {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  const [theme, setTheme] = useState(savedTheme);
  const [currentSection, setCurrentSection] = useState('home');
  const sectionRefs = useRef({}); 

  useEffect(() => {
    const bodyElement = document.body;

    if (bodyElement.scrollWidth > window.innerWidth) {
      window.scrollTo({
        left: (bodyElement.scrollWidth - window.innerWidth) / 2,
        behavior: 'smooth',
      });
    }
  }, [currentSection]);

  useEffect(() => {
    if (sectionRefs.current[currentSection]) {
      sectionRefs.current[currentSection].scrollIntoView({
        behavior: 'auto',
        block: 'start',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentSection]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ✅ Preload images
  useEffect(() => {
    allImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <Home 
            setCurrentSection={setCurrentSection} 
            theme={theme} 
            ref={(el) => (sectionRefs.current.home = el)} 
          />
        );
      case 'projects':
        return (
          <Projects
            setCurrentSection={setCurrentSection}
            theme={theme} 
            ref={(el) => (sectionRefs.current.projects = el)}
          />
        );
      case 'experience':
        return (
          <Experience 
            setCurrentSection={setCurrentSection} 
            ref={(el) => (sectionRefs.current.experience = el)} 
          />
        );
      case 'about':
        return (
          <About 
            setCurrentSection={setCurrentSection} 
            ref={(el) => (sectionRefs.current.about = el)} 
          />
        );
      case 'contact':
        return (
          <Contact 
            setCurrentSection={setCurrentSection} 
            ref={(el) => (sectionRefs.current.contact = el)} 
          />
        );
      default:
        return (
          <Home 
            setCurrentSection={setCurrentSection} 
            theme={theme} 
            ref={(el) => (sectionRefs.current.home = el)} 
          />
        );
    }
  };

  return (
    <div className={`container ${theme === 'light' ? 'container-light' : 'container-dark'}`}>
      <Preloader />
      <Navbar
        theme={theme}
        setTheme={setTheme}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <div className="App">
        {renderSection()}

        {/* ✅ Hidden preloader to force full image load */}
        <div style={{ display: 'none' }}>
          {allImages.map((src, index) => (
            <img key={index} src={src} alt={`preload-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
