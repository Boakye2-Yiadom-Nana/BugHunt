import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';  // Assuming you're importing a CSS file for styling

const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');  // State for displaying messages
  const [isSuccess, setIsSuccess] = useState(null);  // State to track if the submission was successful or failed

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ide7oqt', 'template_pu0o7r8', form.current, 'd8c5JA5zSbeJRZEhA')
      .then(
        () => {
          setStatusMessage('Email sent successfully!');
          setIsSuccess(true);
          form.current.reset();  // Reset the form after successful submission
        },
        (error) => {
          setStatusMessage('Failed to send email. Please try again later.');
          setIsSuccess(false);
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="email-form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        
        <label>Email</label>
        <input type="email" name="user_email" required />
        
        <label>Message</label>
        <textarea name="message" required />
        
        <input type="submit" value="Send" />
        
        {statusMessage && (
          <p className={isSuccess ? 'success-message' : 'error-message'}>
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
