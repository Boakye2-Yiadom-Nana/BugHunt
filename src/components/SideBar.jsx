import React from 'react';
import './SideBar.css';
import navList from '../data/navitem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SideBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      console.log('Logout function called'); // Debugging
      const response = await axios.post('http://localhost:5000/api/users/logout');
      console.log('Logout response:', response.data); // Debugging
      // Clear any user-related data here (e.g., localStorage)
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login'); // Redirect to the login page after logout
    } catch (error) {
      console.error('Logout failed:', error); // Debugging
      // Optionally show an error message
    }
  };

  return (
    <aside id='sidebar' className='sidebar'>
      <ul className="sidebar-nav" id='sidebar-nav'>
        <li className='nav-item'>
          <a href="#"
            className="nav-link"
            onClick={() => navigate('/dashboard')}>
            <i className='bi bi-grid'></i> 
            <span>Dashboard</span>
          </a>
        </li>
        <li className='nav-item'>
          <a
            href="#"
            className="nav-link collapsed"
            onClick={() => navigate('/BugPage')}
          >
            <i className='bi bi-bug-fill'></i>
            <span>Bugs</span>
          </a>
        </li>
        

        <li className="nav-heading"></li>
        {/* {navList.map(nav => (
  <li className='nav-item' key={nav._id}>
    <a 
      href="#" 
      className="nav-link collapsed"
      onClick={() => nav.name === 'Contact Us' ? navigate('/UserPage') : null}
    >
      <i className={nav.icon}></i>
      <span>{nav.name}</span>
    </a>
  </li>

))} */}
        <li>
          <a href
            className="nav-link collapsed" 
            onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
    </aside>
  );
}

export default SideBar;
