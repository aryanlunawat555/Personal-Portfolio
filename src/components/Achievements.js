import React from 'react';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements">
            <div className="achievements-container">
                <h1>Achievements</h1>
                <ul className="achievements-list">
                    <li>Achieved A+ Grade in AICPE Examination for C Programming</li>
                </ul>
                <h1>Certifications</h1>
                <ul className="certifications-list">
                    <li>
                        Crash Course on Python - Google 
                        <a href="https://coursera.org/share/71d97f4d96d1021d9cf87a7d2d813696" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </li>
                    <li>
                        AWS Cloud Technical Essentials - Amazon Web Services 
                        <a href="https://coursera.org/share/5746ccafeeec46398b4cd065fe149c13" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </li>
                    <li>
                        Data Structures - University of California San Diego 
                        <a href="https://coursera.org/share/0fe6abf123ffb14afcab44cf03052ab7" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Achievements;
