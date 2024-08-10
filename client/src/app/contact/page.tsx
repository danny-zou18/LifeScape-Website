"use client";

import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                setResponseMessage('Your message has been sent successfully!');
            } else {
                setResponseMessage('Failed to send your message. Please try again later.');
            }
        } catch (error) {
            setResponseMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="contact-page">
            <div className="logo-container">
                <img src="images/logo.png" alt="LifeScape Logo" className="logo" />
            </div>
            <div className="contact-us">
                <h1>Contact Us</h1>
                <p>
                    Have a question or comment? We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
                </p>
            </div>
            <form id="contact_form" onSubmit={handleSubmit}>
                <div className="row">
                    <label className="required" htmlFor="name">Your Name:</label>
                    <input id="name" className="input" name="name" type="text" required value={formData.name} onChange={handleChange} />
                    <span id="name_validation" className="error_message"></span>
                </div>
                <div className="row">
                    <label className="required" htmlFor="email">Your Email:</label>
                    <input id="email" className="input" name="email" type="email" required value={formData.email} onChange={handleChange} />
                    <span id="email_validation" className="error_message"></span>
                </div>
                <div className="row">
                    <label className="required" htmlFor="message">Your Message:</label>
                    <textarea id="message" className="input" name="message" rows={7} required value={formData.message} onChange={handleChange}></textarea>
                    <span id="message_validation" className="error_message"></span>
                </div>
                <div className="button-container">
                    <input id="submit_button" type="submit" value="Send Message" />
                </div>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
};

export default ContactPage;
