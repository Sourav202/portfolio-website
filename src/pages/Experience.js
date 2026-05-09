import React, { useEffect, forwardRef } from 'react';
import './experience.css'; 
import logoPathways from '../assets/logo-pathways.png';
import logoSM from '../assets/logo-sm.png';
import logoPepperdata from '../assets/logo-pepperdata.jpg';
import logoNokia from  '../assets/logo-nokia.png';
import logoNokia2 from  '../assets/logo-nokia2.png';
import logoRBC from  '../assets/logo-rbc.png';

const experienceData = [
  {
    role: "Quality Engineer Intern",
    company: "RBC, Toronto, Ontario",
    duration: "May 2026 – Present",
    description:
      "Working on the Merchant Services Workbench platform, developing automated regression tests and supporting validation workflows using Playwright and TypeScript for POS reporting services",
    logo: logoRBC, 
  },
  {
    role: "Automation Engineer Co-op",
    company: "Nokia, Ottawa, Ontario",
    duration: "Jan 2026 – Apr 2026",
    description:
      "Built end-to-end product features for the NEDR platform in Java and Go within the Mobile Infrastructure team. Wrote unit tests, debugged issues, contributed code to production releases, and authored internal and customer documentation",
    logo: logoNokia2, 
  },
  {
    role: "Software Support Co-op",
    company: "Nokia, Ottawa, Ontario",
    duration: "Sep 2025 – Dec 2025",
    description:
      "Worked on the NSP product within the Network Infrastructure team, investigating and resolving software defects. Used Python along with Kubernetes, OpenStack, Linux, and Postman to reproduce issues, analyze logs, and trace API behaviour",
    logo: logoNokia, 
  },
  {
    role: "Software Engineer Intern",
    company: "Pepperdata, Toronto, Ontario",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Engineered PyTorch training and inference workloads on AWS and GCP using Docker and Kubernetes. Worked with Jenkins and Vertex AI pipelines and created a GPU benchmarking tool to evaluate performance",
    logo: logoPepperdata, 
  },
  {
    role: "IT Support Technician",
    company: "S.M I.T Services, Brampton, Ontario",
    duration: "May 2024 - Aug 2024",
    description:
      "Provided IT support for PCs and laptops. Diagnosed technical problems, performed troubleshooting, software setup, and maintenance to help clients resolve issues",
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
      "Supported students in Computer Science, Math, English, and French from PRE-K to 12. Developed worksheets to reinforce learning and improve confidence",
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
