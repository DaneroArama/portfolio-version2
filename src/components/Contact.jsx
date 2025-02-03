import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    useEffect(() => {
        emailjs.init("bAtQ-wd_kD8rNlZRe"); // Your EmailJS Public Key
    }, []);

    function sendEmail(event) {
        event.preventDefault(); // Prevent form from reloading
        emailjs.sendForm('service_danero', 'template_danero', event.target) // Replace with correct Template ID
            .then((response) => {
                alert("✅ Email sent successfully!");
                event.target.reset(); // Clear the form after submission
            })
            .catch((error) => {
                alert("❌ Error sending email: " + error.text);
            });
    }

    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <p>Let's build something great together! Feel free to reach out.</p>
            <div className="form-container">
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="user_name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Company Email</label>
                        <input type="email" id="email" name="user_email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">How Can We Help You?</label>
                        <textarea name="message" id="textarea" rows="5" placeholder="Write your message here..." required></textarea>
                    </div>
                    <button className="form-submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;