import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatePassword = useCallback(() => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setPasswordValid(regex.test(formData.password));
    }, [formData.password]);

    useEffect(() => {
        validatePassword();
    }, [validatePassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match' });
            return;
        }

        if (!passwordValid) {
            setMessage({ type: 'error', text: 'Password must be at least 8 characters long and include both letters and numbers' });
            return;
        }

        setLoading(true);

        axios.post('http://localhost:5000/api/users/register', formData)
            .then(response => {
                console.log('Registration successful:', response.data);
                setMessage({ type: 'success', text: 'Registration successful!' });
                setTimeout(() => navigate('/login'), 2000);
            })
            .catch(error => {
                console.error('Registration failed:', error.response.data);
                setMessage({ type: 'error', text: error.response.data.message || 'Registration failed' });
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            {message && <div className={`message ${message.type}`}>{message.text}</div>}
            {loading && <div className="loading">Registering...</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required autoComplete="off" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required autoComplete="off" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required autoComplete="off" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"  
                        required
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    {formData.password && (
                        <div className={`password-feedback ${passwordValid ? 'valid' : 'invalid'}`}>
                            {passwordValid ? 'Password is valid' : 'Password must be at least 8 characters long and include both letters and numbers'}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Enter your confirm password"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-btn" disabled={loading || !passwordValid}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
                <br />
                <p>If You Already have An Account <Link to="/login">login</Link></p>
            </form>
        </div>
    );
};

export default Register;
