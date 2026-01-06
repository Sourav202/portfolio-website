import React, { useEffect, forwardRef } from 'react';
import './experience.css'; 
import logoPathways from '../assets/logo-pathways.png';
import logoSM from '../assets/logo-sm.png';
import logoPepperdata from '../assets/logo-pepperdata.jpg';
import logoNokia from  '../assets/logo-nokia.png';
import logoNokia2 from  '../assets/logo-nokia2.png';

const experienceData = [
    {
    role: "Automation Engineer Co-op",
    company: "Nokia, Kanata, Ontario",
    duration: "Jan 2026 – Present",
    description:
      "Supporting cloud-native automation and deployment workflows while gaining hands-on experience with notable technologies including Java, Go, Kubernetes (OpenShift), Helm, and Ansible.",
    logo: logoNokia2, 
  },
  {
    role: "Software Support Co-op",
    company: "Nokia, Kanata, Ontario",
    duration: "Sep 2025 – Dec 2025",
    description:
      "Contributed to the development and support of networking software, including large-scale systems. Strengthened skills in troubleshooting, problem-solving, and collaborating within a professional engineering environment.",
    logo: logoNokia, 
  },
  {
    role: "Software Engineer Intern",
    company: "Pepperdata, Toronto, Ontario",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Built and optimized large-scale PyTorch workloads on AWS and GCP with Kubernetes and Docker, developing a GPU benchmarking tool and ML pipelines using Jenkins and Vertex AI for fine-tuning and batch inference.",
    logo: logoPepperdata, 
  },
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
    duration: "Aug 2020 - Aug 2023",
    description:
      "Taught diverse groups of students ranging from all backgrounds and ages, balancing time and schedules effectively while creating educational resources in English, Math and French. This role provided essential skills in time management and client communication, serving as my gateway into the professional world.",
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
