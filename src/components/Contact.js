import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS service parameters from environment variables
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                // Reset form fields
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send message, please try again later.');
            });
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;