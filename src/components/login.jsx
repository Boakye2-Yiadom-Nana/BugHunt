import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            
            console.log('Login successful:', response.data);
            
            // Store the token in localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email); // Store user email
            console.log('Stored token:', response.data.token);
    
            setAlert({ type: 'success', message: 'Login successful!' });
           
            // Redirect to the main page after successful login
            setTimeout(() => {
                navigate('/dashboard');
            }, -10);
        } catch (error) {
            console.error('Login failed:', error.response.data);
            setAlert({ type: 'danger', message: error.response.data.message || 'Login failed' });
        }
    };
    

    const closeAlert = () => {
        setAlert(null);
    };

    return (
        
        <div className="form-container">
            {alert && (
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    {alert.message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={closeAlert}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                )}

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" 
                        required 
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password" 
                        required 
                        autoComplete="off"
                    />
                </div>
                <button type="submit" className="submit-btn">Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
