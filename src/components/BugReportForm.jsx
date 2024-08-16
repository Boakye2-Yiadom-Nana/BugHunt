import React, { useState, useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const BugReportForm = ({ addBugToList }) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });
    const [error, setError] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const authHeader = `Bearer ${token}`;
            const response = await axios.post('http://localhost:5000/api/bugs', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authHeader
                }
            });
            console.log('Bug added:', response.data);
            addBugToList(response.data);

            // Send email
            await emailjs.send(
                'service_ide7oqt',
                'template_pu0o7r8',
                {
                    user_name: 'Bug Reporter',
                    user_email: 'bugreporter@example.com',
                    message: `Bug Title: ${formData.title}\n\nDescription: ${formData.description}`,
                },
                'd8c5JA5zSbeJRZEhA'
            );

            setFormData({
                title: '',
                description: '',
            });
            setError(null);
            setStatusMessage('Bug reported and email sent successfully!');
            setIsSuccess(true);
        } catch (error) {
            console.error('Error adding bug:', error.response ? error.response.data : error.message);
            setError('Error adding bug');
            setStatusMessage('Failed to report bug or send email. Please try again.');
            setIsSuccess(false);
        }
    };

    return (
        <div className="submission">
            <h1>Report a Bug</h1>
            {error && <p className="error-message">{error}</p>}
            {statusMessage && (
                <div className={`status-message ${isSuccess ? 'success' : 'error'}`}>
                    {statusMessage}
                </div>
            )}
            <form ref={form} className='submission-form' onSubmit={handleSubmit}>
                <input
                    className='form-group input'
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Bug Title"
                    required
                />
                <textarea
                    className='form-group input'
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <button className="submit-button" type="submit">Add Bug</button>
            </form>
        </div>
    );
};

export default BugReportForm;
