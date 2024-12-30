// ./pages/Projects.js
import React, { useEffect, forwardRef } from 'react';
import './projects.css'; // Custom styles for Projects page

// Import project images and icons from assets
import projLibrary from '../assets/proj-library.webp';
import projChat from '../assets/project-chat.webp';
import projMusic from '../assets/project-music.jpg';
import projGhost from '../assets/project-ghost.png';
import projRobot from '../assets/proj-robot.webp';
import projPortfolio from '../assets/proj-portfolio.png';
import projGeo from '../assets/proj-geo.png';
import projClass from '../assets/proj-class.png';
import projElevator from '../assets/proj-elevator.png';
import ytIcon from '../assets/yt-icon.png';
import githubIcon from '../assets/github-icon.png';

const disabledVids = ["Robot Dice Race", "Ghost Hunt Simulator", "Digital Image Classifier", "Ghost Hunt Simulator", "Library Management System", "My Portfolio Website", "Public & Private Chat Client"]; // Add titles here
const disabledGits = ["Robot Dice Race"]; // Add titles here

// Project Data
const projectsData = [
  {
    title: "Digital Image Classifier",
    description:
      "Built a Convolutional Neural Network (CNN) for image classification, featuring multiple convolutional and pooling layers. Optimized with Adam, the model achieves high validation accuracy. The project manages data loading, augmentation, training, and predictions, demonstrating adaptability for image classification.",
    languages: ["Python"],
    tools: ["TensorFlow", "NumPy", "Pandas"],
    image: projClass, // Replace with the actual image path
    youtubeLink: "https://www.youtube.com", // Replace with YouTube link if available
    githubLink: "https://github.com/Sourav202/Digital-Image-Classifier", // Replace with GitHub link if available
    os: "windows", // Assuming it was developed on Windows
  },
  {
    title: "Elevator Simulation",
    description:
      "Created an elevator simulator featuring a user-friendly GUI to simulate real-time events with smooth functionality. The project handles emergencies, manages multiple passengers efficiently, and provides a realistic simulation experience, showcasing advanced event handling, responsive design, and simple data structures.",
    languages: ["CPP"],
    tools: ["Qt", "Qt Runner"],
    image: projElevator, // Replace with the actual image path
    youtubeLink: "https://www.youtube.com/watch?v=dycuBuI_p0A", // Replace with YouTube link if available
    githubLink: "https://github.com/Sourav202/Elevator-Simulation", // Replace with GitHub link if available
    os: "linux", // Assuming it was developed on Windows
  },
  {
    title: "GeoDasher AI",
    description:
      "Designed an immersive replica of Geometry Dash's iconic first level, featuring precise physics and meticulously crafted obstacles. Engineered an AI system that combines reinforcement learning and genetic algorithms into an innovative ensemble framework, enabling the AI to learn, adapt, and complete the game level.",
    languages: ["Python"],
    tools: ["Pygame"],
    image: projGeo, // Replace with the actual image path
    youtubeLink: "https://www.youtube.com/watch?v=hP-NUHpn1TQ", // Replace with YouTube link if available
    githubLink: "https://github.com/Sourav202/GeoDasher-AI", // Replace with GitHub link if available
    os: "windows", // Assuming it was developed on Windows
  },
  {
    title: "Ghost Hunt Simulator",
    description:
      "Simulates an automated game where ghosts and hunters compete for victory. This project runs independently, utilizing semaphores, semaphore mutexes, multithreading, and data structures like linked lists and arrays to create unique game states, ensuring each outcome is distinct and unpredictable.",
    languages: ["C"],
    tools: ["Makefile"],
    image: projGhost,
    youtubeLink: "https://www.youtube.com",
    githubLink: "https://github.com/Sourav202/Ghost-Hunt-Simulator",
    os: "linux", // Linux for Ghost Hunt
  },
  {
    title: "Library Management System",
    description:
      "Created a tool to maintain a virtual library system, allowing users to search, add, and manage books with features for filtering by title, author, or genre. Books can be exported as CSV or JSON, streamlining library management and enhancing the user experience.",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: ["Node.js", "SQL"],
    image: projLibrary,
    youtubeLink: "https://www.youtube.com",
    githubLink: "https://github.com/Sourav202/Library-Management-System",
    os: "windows", // Windows for this project
  },
  {
    title: "My Portfolio Website",
    description: "Designed a personal portfolio to showcase my projects, achievements, and skills. This summary only scratches the surface of the tools I utilized. Explore this project to gain insights into the design process, as well as the numerous frameworks and external libraries I incorporated.",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: ["React"],
    image: projPortfolio,
    youtubeLink: "https://www.youtube.com",
    githubLink: "https://github.com/Sourav202/portfolio-website",
    os: "windows", // Windows for this project
  },
  {
    title: "Public & Private Chat Client",
    description:
      "Created a real-time chat client that enables users to connect and chat in global or private chats. It features an interactive environment that supports seamless communication, a clear interface, and customization to enhance the experience, making it more personal and engaging.",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: ["Node.js", "Socket.IO"],
    image: projChat,
    youtubeLink: "https://www.youtube.com",
    githubLink: "https://github.com/Sourav202/Public-and-Private-Chat-Client",
    os: "windows", // Windows for this project
  },
  {
    title: "Robot Dice Race",
    description:
      "Simulated a game where two autonomous bots race by rolling dice to reach the finish line. It highlights randomness and probability, demonstrating how simple automated agents can interact and compete, creating an engaging user-watching experience filled with excitement.",
    languages: ["Python"],
    tools: ["Pygame"],
    image: projRobot,
    youtubeLink: "https://www.youtube.com",
    className: "no-github", // Identifier to hide the GitHub link via CSS
    os: "windows", // Windows for this project
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
    os: "windows", // Windows for this project
  },
];

const Projects = forwardRef(({ setCurrentSection, theme }, ref) => {
  useEffect(() => {
    setCurrentSection('projects');
  }, [setCurrentSection]);

  const formatClassName = (name) =>
    `tag color-${name.toLowerCase().replace('.', '-').replace(' ', '-')}`;

  const getOSIcon = (os) => {
    return os === 'linux' ? 'linux-logo.png' : 'windows-logo.png';
  };

  const getOSTooltip = (os) => {
    return os === 'linux' ? 'Developed in Linux OS' : 'Developed in Windows OS';
  };

  return (
    <div>
      {/* Separate Heading Section */}
      <div className="projects-header" ref={ref}>
      <p className="project-description"/>
        <h2 className="projects-heading">Explore My Projects</h2>
      </div>
      {/* Projects Section */}
      <div
        className={`projects-container ${
          theme === 'light' ? 'light-theme' : 'dark-theme'
        }`}
        
      >
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div style={{ position: 'relative' }}>
              {/* OS Icon */}
              <div className="os-icon">
                <img
                  src={require(`../assets/${getOSIcon(project.os)}`)}
                  alt={`${project.os} logo`}
                />
              </div>
              {/* Tooltip */}
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
                {disabledVids.includes(project.title) ? (
                  // Disabled YouTube icon
                  <div className="youtube-icon disabled-icon">
                    <img src={ytIcon} alt="YouTube" className="icon" />
                  </div>
                ) : (
                  // Normal YouTube icon
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={ytIcon} alt="YouTube" className="icon" />
                  </a>
                )}
                {disabledGits.includes(project.title)  ? (
                  // Disabled GitHub icon
                  <div className="github-icon disabled-icon">
                    <img src={githubIcon} alt="GitHub" className="icon" />
                  </div>
                ) : (
                  // Normal GitHub icon
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
