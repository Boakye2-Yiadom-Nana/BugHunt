import React, { useState } from 'react';
import axios from 'axios';

const BugReportForm = ({ addBugToList }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const authHeader = `Bearer ${token}`;
            console.log('Authorization header:', authHeader);
            const response = await axios.post('http://localhost:5000/api/bugs', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authHeader
                }
            });
            console.log('Bug added:', response.data);
            addBugToList(response.data);
            setFormData({
                title: '',
                description: '',
            });
            setError(null);
        } catch (error) {
            console.error('Error adding bug:', error.response ? error.response.data : error.message);
            setError('Error adding bug');
        }
    };

    return (
        <div className="submission">
            <h1>Report a Bug</h1>
            {error && <p className="error-message">{error}</p>}
            <form className='submission-form' onSubmit={handleSubmit}>
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
