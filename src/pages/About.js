import React from 'react';
import './about.css';
import hobbiesImg from '../assets/about1.PNG';
import journeyImg from '../assets/logo-carleton.png';

const About = React.forwardRef((props, ref) => {
  return (
    <div>
      <div className="about-header" ref={ref}>
        <div className="about-container">
          <h1 className="about-heading">All About Me</h1>
          <section className="about-section">
            <div className="section-image">
              <img src={journeyImg} alt="Academic Journey" />
            </div>
            <div className="section-content">
              <h2>Academic Journey</h2>
              <p>
                As a fourth-year Computer Science student at&nbsp;
                <a href="https://carleton.ca/" target="_blank" rel="noopener noreferrer">Carleton University</a>, I am pursuing an Honours Bachelor of Computer Science with a specialization in Artificial Intelligence and Machine Learning. In addition, I am enhancing my analytical and problem-solving skills through a complementary minor in Mathematics, providing a strong foundation for complex computational challenges associated with this field.
              </p>
            </div>
          </section>

          {/* Hobbies and Interests Section */}
          <section className="about-section">
            <div className="section-image">
              <img src={hobbiesImg} alt="Hobbies and Interests" />
            </div>
            <div className="section-content">
              <h2>Hobbies and Interests</h2>
              <p>
                I enjoy engaging in a diverse range of activities that fuel both my physical and creative interests. I am involved in the Carleton University Badminton Club and regularly work out at the gym. On the creative side, I am passionate about videography and editing, where I use the Adobe Creative Suite to bring my ideas to life. Beyond these, I have had the honor of competing internationally, earning second place in the&nbsp;
                <a href="https://www.getmistified.com/" target="_blank" rel="noopener noreferrer">MIST International Film Competition</a> 
                &nbsp;for my video editing and storytelling skills, and receiving the Design and Build Awards with my&nbsp;
                <a href="https://www.vexrobotics.com/" target="_blank" rel="noopener noreferrer">VEX Robotics</a> team (99000X ~(˘▾ ˘~)), which showcased my ability to innovate and sparked my continuous interest in coding.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

export default About;
