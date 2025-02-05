import React, { useState } from "react";
import "../styles/Navbar.css";

const HireMeButton = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Aung_Phone_Myat_CV.pdf"; // Ensure correct path
        link.download = "Aung_Phone_Myat_CV.pdf"; // Custom file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload} className="hire-me-button">
            HIRE ME
        </button>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navMenu">
            <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <div className="dot"></div>
            </div>

            {/* Use the HireMeButton Component */}
            <HireMeButton />
        </nav>
    );
};

export default Navbar;