import React from 'react';
import './AboutMe.css';
import AryanLunawat from '../assets/AryanLunawat.jpg';
import CV from '../assets/AryanLunawat_CV.pdf'; 

const AboutMe = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <img src={AryanLunawat} alt="Aryan Lunawat" />
                <div className="info-box">
                    <h3>Hi, I'm</h3>
                    <h1>Aryan Lunawat</h1>
                    <span>B.Tech Computer Science Student</span>
                    <p>
                        Welcome to my portfolio. I am a tech enthusiast with a passion for Artificial Intelligence, Machine Learning, and practical projects. I also enjoy swimming, badminton, and possess strong leadership and communication skills. I aim to contribute to impactful projects in the tech industry.
                    </p>
                    <div className="btn-group">
                        <a href={CV} download target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
                    </div>
                    <div className="socials">
                        <a href="https://github.com/aryanlunawat555" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/aryan-lunawat-b22a4a27b/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
