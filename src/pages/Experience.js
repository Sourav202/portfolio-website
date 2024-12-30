import React, { useEffect, forwardRef } from 'react';
import './experience.css'; // Custom styles for Experience page
import logoPathways from '../assets/logo-pathways.png';
import logoSM from '../assets/logo-sm.png';

const experienceData = [
  {
    role: "IT Support Technician",
    company: "S.M I.T Services, Brampton, Ontario",
    duration: "May 2024 - Aug 2024",
    description:
      "Acquired a basic understanding of hardware systems and their integration with software, while troubleshooting and resolving of technical issues. This role strengthened my expertise in hardware and software related interactions, fostering enhanced problem-solving capabilities, adaptability, and critical thinking skills.",
    logo: logoSM,
  },
  {
    role: "Multidisciplinary Tutor",
    company: (
      <>
        <a
          href="https://pathways2excellence.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pathways 2 Excellence
        </a>
        , Brampton, Ontario
      </>
      ),
    duration: "Aug 2020 - Present",
    description:
      "Taught diverse groups of students ranging from all backrounds and ages, balancing time and schedules effectively while creating educational resources in English, Math and French. This role provided essential skills in time management and client communication, serving as my gateway into the professional world.",
    logo: logoPathways,
  },
];

const Experience = forwardRef(({ setCurrentSection }, ref) => {
  useEffect(() => {
    setCurrentSection('experience'); // Set active section when mounted
  }, [setCurrentSection]);

  return (
    <div>
      <div className="experience-header" ref={ref}>
        <div className="experience-container">
          <h1 className="experience-heading">Professional Experience</h1>
          <div className="timeline">
            {experienceData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                <img src={item.logo} alt={`${item.company} Logo`} className="company-logo" />
                    <h2 className="experience-role">{item.role}</h2>
                  <h3 className="experience-company">{item.company}</h3>
                  <p className="experience-duration">{item.duration}</p>
                  <p className="experience-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;
