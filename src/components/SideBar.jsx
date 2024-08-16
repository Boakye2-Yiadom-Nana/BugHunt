import React from 'react';
import './SideBar.css';
import navList from '../data/navitem';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

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
        {navList.map(nav => (
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
))}

      </ul>
    </aside>
  );
}

export default SideBar;
