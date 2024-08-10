import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

// Example OAuth scopes for Gmail API
const SCOPES = [
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.readonly'
];

const EmailForm = () => {
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    // You can remove this function if you don't need to manage state for form inputs
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g65nucb', 'template_j4992lk', form.current, 'd8c5JA5zSbeJRZEhA')
      .then(
        () => {
          setStatus('Email sent successfully!');
        },
        (error) => {
          setStatus('Failed to send email. Please try again later.');
        },
      );

    // Optionally reset the form after submission
    form.current.reset();
  };

  return (
    <div className="email-form-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" required />
        
        <label>Email:</label>
        <input type="email" name="user_email" required />
        
        <label>Subject:</label>
        <input type="text" name="subject" required />
        
        <label>Message:</label>
        <textarea name="message" required />
        
        <input type="submit" value="Send" />
        
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default EmailForm;
