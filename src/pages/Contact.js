import React from 'react';
import Lottie from 'lottie-react';
import ani from '../animations/animation2.json';
import icon1 from '../assets/contact.png';
import icon2 from '../assets/contact2.png';
import document from '../documents/Sourav Minhas Fall24 Resume.pdf';
import './contact.css';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className="contact-page" ref={ref}>
      {/* Title Section */}
      <div className="contact-header">
        <h1 className="contact-heading">Get in Contact</h1>
      </div>

      {/* Main Content */}
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Email: <a href="mailto:souravsminhas@gmail.com">souravsminhas@gmail.com</a></h2>
          <h2>Phone: <a href="tel:416-451-9682">416-451-9682</a></h2>
          <a href={document} download="Sourav_Minhas_Fall24_Resume.pdf">
            <h2>Download My Resume</h2>
          </a>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/souravminhas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={icon1} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/Sourav202" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={icon2} alt="GitHub Icon" />
            </a>
          </div>
        </div>

        {/* Animation */}
        <div className="contact-animation">
          <Lottie animationData={ani} />
        </div>
      </div>
    </div>
  );
});

export default Contact;
