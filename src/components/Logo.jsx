import React from 'react';
import './Logo.css';
// import logoImage from '../images/images.png';
 function Logo () {
      
  const handleToggleSidebar = () => {
     document.body.classList.toggle('toggle-sidebar');
  };
    
  return (
<div className="d-flex align-items-center justify-content-between">
  <a href="/" className='logo d-flex align-items-center'>
  {/* <img className='img' src={logoImage} alt="logo"/> */}
  <span className="d-none d-lg-block">B<i className='bi bi-bug-fill'></i>GHUNT</span>
  <i 
//  className="bi bi-list toggle-sidebar-btn"
onClick={handleToggleSidebar}></i>
  </a>
</div>

  );
}

export default Logo;
