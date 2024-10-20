import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('https://formspree.io/f/xgveveoq', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setSuccess(true);
            setError(false);

            setName('');
            setEmail('');
            setMessage('');
        } else {
            setSuccess(false);
            setError(true);
        }
    };

    return (
        <div id="contactme"> {}
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                
                <button type="submit">Send</button>
            </form>

            {success && <p className="success-message">Your message has been sent successfully!</p>}
            {error && <p className="error-message">There was an error sending your message. Please try again.</p>}
        </div>
    );
};

export default ContactMe;
