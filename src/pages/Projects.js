import React, { useEffect, forwardRef } from 'react';
import './projects.css'; 

import projLibrary from '../assets/proj-library.webp';
import projChat from '../assets/project-chat.webp';
import projMusic from '../assets/project-music.jpg';
import projGhost from '../assets/project-ghost.png';
import projRobot from '../assets/proj-robot.webp';
import projPortfolio from '../assets/proj-portfolio.png';
import projGeo from '../assets/proj-geo.png';
import projClass from '../assets/proj-class.png';
import projElevator from '../assets/proj-elevator.png';
import projPiVision from '../assets/proj-vision.webp';
import ytIcon from '../assets/yt-icon.png';
import githubIcon from '../assets/github-icon.png';

const projectsData = [
  {
  title: "PiVision",
  description:
    "QNX-powered vision system where a Raspberry Pi 5 records video and sends it to a Windows server. The server uses OpenCV and MediaPipe to process the footage and detect useful visual information. This setup separates video capture from processing, making the system easier to scale, test, and extend. ",
  languages: ["Python", "Shell"],
  tools: ["OpenCV", "MediaPipe", "Raspberry Pi"],
  image: projPiVision,
  youtubeLink: null,
  githubLink: "https://github.com/Sourav202/PiVision",
  os: "qnx",
  },
  {
    title: "Digital Image Classifier",
    description:
      "Built a Convolutional Neural Network (CNN) for image classification, featuring multiple convolutional and pooling layers. Optimized with Adam, the model achieves high validation accuracy. The project manages data loading, augmentation, training, and predictions, demonstrating adaptability for image classification.",
    languages: ["Python"],
    tools: ["TensorFlow", "NumPy", "Pandas"],
    image: projClass, 
    youtubeLink: null, 
    githubLink: "https://github.com/Sourav202/Digital-Image-Classifier", 
    os: "windows", 
  },
  {
    title: "Elevator Simulation",
    description:
      "Created an elevator simulator featuring a user-friendly GUI to simulate real-time events with smooth functionality. The project handles emergencies, manages multiple passengers efficiently, and provides a realistic simulation experience, showcasing advanced event handling, responsive design, and simple data structures.",
    languages: ["CPP"],
    tools: ["Qt", "Qt Runner"],
    image: projElevator, 
    youtubeLink: "https://www.youtube.com/watch?v=dycuBuI_p0A",
    githubLink: "https://github.com/Sourav202/Elevator-Simulation", 
    os: "linux", 
  },
  {
    title: "GeoDasher AI",
    description:
      "Designed an immersive replica of Geometry Dash's iconic first level, featuring precise physics and meticulously crafted obstacles. Engineered an AI system that combines reinforcement learning and genetic algorithms into an innovative ensemble framework, enabling the AI to learn, adapt, and complete the game level.",
    languages: ["Python"],
    tools: ["Pygame"],
    image: projGeo,
    youtubeLink: "https://www.youtube.com/watch?v=hP-NUHpn1TQ",
    githubLink: "https://github.com/Sourav202/GeoDasher-AI",
    os: "windows", 
  },
  {
    title: "Ghost Hunt Simulator",
    description:
      "Simulates an automated game where ghosts and hunters compete for victory. This project runs independently, utilizing semaphores, semaphore mutexes, multithreading, and data structures like linked lists and arrays to create unique game states, ensuring each outcome is distinct and unpredictable.",
    languages: ["C"],
    tools: ["Makefile"],
    image: projGhost,
    youtubeLink: null,
    githubLink: "https://github.com/Sourav202/Ghost-Hunt-Simulator",
    os: "linux", 
  },
  {
    title: "Library Management System",
    description:
      "Created a tool to maintain a virtual library system, allowing users to search, add, and manage books with features for filtering by title, author, or genre. Books can be exported as CSV or JSON, streamlining library management and enhancing the user experience.",
    languages: ["HTML", "CSS", "JavaScript", "SQL"],
    tools: ["Node.js"],
    image: projLibrary,
    youtubeLink: null,
    githubLink: "https://github.com/Sourav202/Library-Management-System",
    os: "windows", 
  },
  {
    title: "My Portfolio Website",
    description: "Designed a personal portfolio to showcase my projects, achievements, and skills. This summary only scratches the surface of the tools I utilized. Explore this project to gain insights into the design process, as well as the numerous frameworks and external libraries I incorporated.",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: ["React"],
    image: projPortfolio,
    youtubeLink: null,
    githubLink: "https://github.com/Sourav202/portfolio-website",
    os: "windows", 
  },
  {
    title: "Public & Private Chat Client",
    description:
      "Created a real-time chat client that enables users to connect and chat in global or private chats. It features an interactive environment that supports seamless communication, a clear interface, and customization to enhance the experience, making it more personal and engaging.",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: ["Node.js", "Socket.IO"],
    image: projChat,
    youtubeLink: null,
    githubLink: "https://github.com/Sourav202/Public-and-Private-Chat-Client",
    os: "windows", 
  },
  {
    title: "Robot Dice Race",
    description:
      "Simulated a game where two autonomous bots race by rolling dice to reach the finish line. It highlights randomness and probability, demonstrating how simple automated agents can interact and compete, creating an engaging user-watching experience filled with excitement.",
    languages: ["Python"],
    tools: ["Pygame"],
    image: projRobot,
    youtubeLink: null,
    githubLink: null,
    os: "windows", 
  },
  {
    title: "Secure Music Sharing App",
    description:
      "Built a secure music-sharing app supporting guest and admin roles. It allows users to search and manage a playlist with options to add, remove, or reorder tracks while ensuring playlists persist across sessions using local storage, which improves the users' shared experience.",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: ["Node.js", "SQLite", "iTunes API", "Express"],
    image: projMusic,
    youtubeLink: "https://www.youtube.com/watch?v=aAgnhkgvK-Q",
    githubLink: "https://github.com/Sourav202/Secure-Music-Sharing-App",
    os: "windows", 
  },
];

const Projects = forwardRef(({ setCurrentSection, theme }, ref) => {
  useEffect(() => {
    setCurrentSection('projects');
  }, [setCurrentSection]);

  const formatClassName = (name) =>
    `tag color-${name.toLowerCase().replace('.', '-').replace(' ', '-')}`;

  const getOSIcon = (os) => {
    switch (os) {
      case 'linux':
        return 'linux-logo.png';
      case 'windows':
        return 'windows-logo.png';
      case 'qnx':
        return 'qnx-logo.png';
      default:
        return 'linux-logo.png';
    }
  };

  const getOSTooltip = (os) => {
    switch (os) {
      case 'linux':
        return 'Developed on Linux';
      case 'windows':
        return 'Developed on Windows';
      case 'qnx':
        return 'Developed on QNX';
      default:
        return 'Operating System';
    }
  };

  return (
    <div>
      <div className="projects-header" ref={ref}>
        <p className="project-description"/>
        <h2 className="projects-heading">Explore My Projects</h2>
      </div>
      <div
        className={`projects-container ${
          theme === 'light' ? 'light-theme' : 'dark-theme'
        }`}
      >
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div style={{ position: 'relative' }}>
              <div className="os-icon">
                <img
                  src={require(`../assets/${getOSIcon(project.os)}`)}
                  alt={`${project.os} logo`}
                />
              </div>
              <div className="os-icon-tooltip">{getOSTooltip(project.os)}</div>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                <h4>Languages:</h4>
                <div className="tags">
                  {project.languages.map((lang, idx) => (
                    <span key={idx} className={formatClassName(lang)}>
                      {lang}
                    </span>
                  ))}
                </div>
                <h4>Tools:</h4>
                <div className="tags">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className={formatClassName(tool)}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on YouTube`}
                  >
                    <img src={ytIcon} alt="YouTube" className="icon" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <img src={githubIcon} alt="GitHub" className="icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
});

export default Projects;
