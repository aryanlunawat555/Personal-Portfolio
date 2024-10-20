import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>AIR QUALITY PREDICTION AND CLASSIFICATION</h3>
                    <p>
                        Developed ML project for air quality prediction/classification using pollutant concentrations, 
                        multiple models, feature analysis, anomaly detection, and seasonal/source variation analysis.
                    </p>
                    <div className="btn-group">
                        <a href="https://github.com/aryanlunawat555/Air-Quality-Prediction-and-Classification.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>RESEARCH & DATA ANALYSIS ON SDG - RIGHT TO EDUCATION</h3>
                    <p>
                        Researched education trends in India, including COVID-19 impact. Analyzed resources, disability 
                        education, and teacher supply using stats, regression, correlation & hypothesis testing.
                    </p>
                </div>

                <div className="project-card">
                    <h3>AUTOMATIC HAND SANITIZER DISPENSER</h3>
                    <p>
                        Designed cost-effective automatic sanitizer dispenser using Arduino Uno, Ultrasonic Sensor, 
                        Servo Motor, and Battery. Ideal for schools, hospitals, ensuring hygiene in public spaces.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
