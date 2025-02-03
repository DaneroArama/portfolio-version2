import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social-icon">
                <li className="social-icon__item">
                    <a className="social-icon__link" href="https://www.facebook.com/Danero.Arama.23?mibextid=ZbWKwL">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="https://www.linkedin.com/in/aung-phone-myat-b1b391186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="https://www.instagram.com/daneroarama23/profilecard/?igsh=MWIwYzc0MmkxOGI2Zg==">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
            </ul>
            <p>&copy;2024 Danero Arama | Have A Nice Day!!!</p>
        </footer>
    );
};

export default Footer;