import React, { useEffect } from 'react';
import '../styles/Home.css';
import './FadeContent';
import FadeContent from "./FadeContent";

const Home = () => {
    useEffect(() => {
        // Letter glitch effect
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;

        const title = document.querySelector("h1");
        if (title) {
            title.onmouseover = (event) => {
                let iteration = 0;

                clearInterval(interval);
                interval = setInterval(() => {
                    event.target.innerText = event.target.dataset.value
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return event.target.dataset.value[index];
                            }
                            return letters[Math.floor(Math.random() * 26)];
                        })
                        .join("");

                    if (iteration >= event.target.dataset.value.length) {
                        clearInterval(interval);
                    }
                    iteration += 1 / 3;
                }, 50);
            };
        }

        // Scroll effect for fading and scaling
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const container = document.querySelector('.home-container');
            const image = document.querySelector('.profile-picture img');

            if (scrolled > 100) {
                container.classList.add('fading');
            } else {
                container.classList.remove('fading');
            }

            if (image) {
                const scale = 1 + (scrolled / 1000);
                image.style.transform = `scale(${scale})`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <section className="home-container" id="home">
            <div className="container">
                <div className="container1">
                    <div className="background-text font">
                        <h1 data-value="Danero Arama">Danero Arama</h1>
                    </div>
                    <div className="about">
                        <p>Hi, I'm a full-stack Developer</p>
                        <p>specializing in web development</p>
                        <p>With a strong foundation in</p>
                        <p>React, CSS, JavaScript, and Java</p>
                    </div>
                    <div className="profile-picture">
                        <img src="Danero.png" alt="Danero Arama" />
                    </div>
                </div>
            </div>
        </section>
        </FadeContent>
    );
};

export default Home;
