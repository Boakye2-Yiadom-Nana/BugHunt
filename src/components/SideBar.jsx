import React from 'react';
import './SideBar.css';
import navList from '../data/navitem';

const SideBar = () => {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className="sidebar-nav" id='sidebar-nav'>
        <li className='nav-item'>
          <a href="/" className="nav-link">
            <i className='bi bi-grid'></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* <li className='nav-item'>
          <a
            className='nav-link collapsed'
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href='#'
          > */}
            {/* <i className='bi bi-menu-button-wide'></i>
            <span>Documents</span>
            <i1 className='bi bi-chevron-down ms-auto'></i1>
          </a>
          <ul
            className="nav-content collapse"
            id='components-nav'
            data-bs-parent="#sidebar-nav"
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className='bi bi-circle'></i>
                <span>Customers</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className='bi bi-circle'></i>
                <span>Another</span>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                <i className='bi bi-circle'></i>
                <span>Third Item</span>
              </a>
            </li> */}
          {/* </ul> */}
        {/* </li> */}
        {/* New Forms section */}
        <li className='nav-item'>
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#bugs-nav"
          >
            <i className='bi bi-bug-fill'></i>
            <span>Bugs</span>
            <i1 className='bi bi-chevron-down ms-auto'></i1>
          </a>
          <ul
            className="nav-content collapse"
            id='bugs-nav'
            data-bs-parent="#sidebar-nav"
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className='bi bi-circle'></i>
                <span>Type of Bug</span>
              </a>
            </li>
          </ul>
        </li>
<li className="nav-heading"></li>
{navList.map(nav=>(
    <li className='nav-item' key={(nav._id)}>
        <a href="#" className="nav-link collapsed">
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

