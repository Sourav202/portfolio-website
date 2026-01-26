import React from 'react';
import Lottie from 'lottie-react';
import ani from '../animations/animation2.json';
import icon1 from '../assets/contact.png';
import icon2 from '../assets/contact2.png';
import icon3 from '../assets/contact3.png';
import document from '../documents/Sourav Minhas Resume.pdf';
import './contact.css';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className="contact-page" ref={ref}>
      <div className="contact-header">
        <h1 className="contact-heading">Get in Contact</h1>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>
            Email: <a href="mailto:souravsminhas@gmail.com">souravsminhas@gmail.com</a>
          </h2>

          <a href={document} download="Sourav Minhas Resume.pdf">
            <h2>Download My Resume Here</h2>
          </a>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/souravminhas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={icon1} alt="LinkedIn Icon" />
            </a>

            <a
              href="https://github.com/Sourav202"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src={icon2} alt="GitHub Icon" />
            </a>

            <a
              href="https://devpost.com/souravminhas202"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devpost"
            >
              <img src={icon3} alt="Devpost Icon" />
            </a>
          </div>
        </div>

        <div className="contact-animation">
          <Lottie animationData={ani} />
        </div>
      </div>
    </div>
  );
});

export default Contact;
