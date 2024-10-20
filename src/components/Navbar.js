import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const handleGithubRedirect = () => {
        window.open('https://github.com/aryanlunawat555', '_blank');
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <span className="logo">Aryan Lunawat</span>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#extracurriculars">Extracurriculars</a></li>
                <li><a href="#contactme">Contact Me</a></li>
            </ul>
            <i className="fa-solid fa-bars" id="menu-icon" onClick={toggleMenu}></i>
            <button className="visit-btn" onClick={handleGithubRedirect}>Visit Github</button>
        </nav>
    );
};

export default Navbar;
