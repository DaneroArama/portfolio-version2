import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="intro">
                    <p>Hi, I'm <strong>Danero Arama</strong>, a passionate full-stack developer from Myanmar. With expertise in React, CSS, JavaScript, and Java, I love building intuitive and efficient web applications.</p>
                </div>
                <div className="fun-facts">
                    <h3>Fun Facts</h3>
                    <ul>
                        <li>I play Wild Rift every midnight to relax.</li>
                        <li>I create polymer clay earrings as a side hustle.</li>
                        <li>Currently, learning Japanese for fun and future opportunities.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;