import React, { useEffect } from 'react';
import '../styles/Services.css';

const Services = () => {
    useEffect(() => {
        const services = document.querySelectorAll('.service');

        const handleScroll = () => {
            const triggerBottom = window.innerHeight * 0.1;

            services.forEach(service => {
                const serviceTop = service.getBoundingClientRect().top;

                if (serviceTop < triggerBottom) {
                    service.classList.add('scrolled-past');
                } else {
                    service.classList.remove('scrolled-past');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to apply effect on page load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="services" id="services">
            <h2>Services</h2>
            <div className="services-container">
                <div className="service">
                    <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <path d="M10 52V12a2 2 0 012-2h40a2 2 0 012 2v40a2 2 0 01-2 2H12a2 2 0 01-2-2zm44-32H10v28h44V20zm-6 18H38v2h10v-2zM38 28h12v-2H38v2z"></path>
                    </svg>
                    <h3>Web Development</h3>
                    <p>I create stunning and responsive websites tailored to your business needs.</p>
                </div>
                <div className="service">
                    <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="30" fill="none" stroke="#000" strokeWidth="4"></circle>
                        <path d="M12 52L32 12l20 40H12z"></path>
                    </svg>
                    <h3>Graphic Design</h3>
                    <p>I craft visually appealing graphics that elevate your brand.</p>
                </div>
                <div className="service">
                    <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <path d="M32 12C18.745 12 8 22.745 8 36s10.745 24 24 24 24-10.745 24-24S45.255 12 32 12zm0 44c-11.046 0-20-8.954-20-20S20.954 16 32 16s20 8.954 20 20-8.954 20-20-20zm-8-20l12-8v16l-12-8z"></path>
                    </svg>
                    <h3>Digital Marketing</h3>
                    <p>I can help you reach a wider audience with tailored marketing strategies.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
