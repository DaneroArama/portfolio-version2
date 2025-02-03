import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navMenu">
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <div className="dot"></div>
            </div>
            <div className="hire_me" id="hireMeButton">
                <a href="Aung_Phone_Myat's_CV.pdf" download>
                    <span>Hire me</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;