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
                        education, and teacher supply using stats, regression, correlation and hypothesis testing.
                    </p>
                </div>

                <div className="project-card">
                    <h3>SMART UNIVERSITY CAMPUS</h3>
                    <p>
                        Developed a scalable IoT solution for campuses, integrating RFID, IR, PIR, flame, and soil moisture
                        sensors with Blynk for real-time monitoring and control, enabling smart access, parking, energy, safety alerts, and ML-driven analysis.
                    </p>
                    <div className="btn-group">
                        <a href="https://github.com/aryanlunawat555/Smart-University-Campus.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
