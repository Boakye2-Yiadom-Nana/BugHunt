import React from 'react'
import profileImg from "../images/nana.jpg"
const NavAvatar = () => {
  return (
    <li className="nav-item dropdown pe-3">
    <a href="#" className="nav-link nav-profile d-flex align-items-center pe0" 
    data-bs-toggle="dropdown">
     <img  src={profileImg} alt='profile' className='rounded-circle'/>
      <span className="d-none d-md-block dropdown-toggle ps-2">N.Boakye</span>
    </a>

    
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
      <li className="dropdown-header">
       <h6>Boakye</h6>
          <span>
            Web Developer
          </span>
      </li>
      <li>
        <hr className='dropdown-divider'></hr>
      </li>
      <li>
        <a href="users-profile.html" 
        className="dropdown-item d-flex align-items-center">
          <i className="bi bi-person"></i>
          <span>My Profile</span>
        </a>
      </li>
      
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li>
        <a href="users-profile.html" 
        className="dropdown-item d-flex align-items-center">
          <i className="bi bi-gear"></i>
          <span>Account settings</span>
        </a>
      </li>
     
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li>
        <a href="users-profile.html" 
        className="dropdown-item d-flex align-items-center">
          <i className="bi bi-question-circle"></i>
          <span>Need Help</span>
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>

    

       <li>
        <hr className="dropdown-divider" />
       </li>

       <li>
        <a href="users-profile.html" 
        className="dropdown-item d-flex align-items-center">
          <i className="bi bi-box-arrow-right"></i>
          <span>Sign Out</span>
        </a>
      </li>

    </ul>
  </li>
  
  )
}

export default NavAvatar