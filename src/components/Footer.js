import React from 'react';
import EmailImg from '../assets/icon-email-clr.png';
import PhoneImg from '../assets/icon-phone-clr.png';
import LinkedInImg from '../assets/icon-linkedin-clr.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#extracurriculars">Extracurriculars</a></li>
            <li><a href="#contactme">Contact Me</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <ul className="contact-list">
            <li>
              <a href="tel:+91-8767288817">
                <img src={PhoneImg} alt="Phone icon" /> +91-8767288817
              </a>
            </li>
            <li>
              <a href="mailto:aryanlunawat555@gmail.com">
                <img src={EmailImg} alt="Email icon" /> aryanlunawat555@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aryan-lunawat-b22a4a27b/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInImg} alt="LinkedIn icon" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
