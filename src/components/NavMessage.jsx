import React from 'react'
import logoImage from '../images/images.png';
const NavMessage = () => {
  return (
    <li className="nav-item dropdown">
    <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
      <li className="bi bi-chat-left-text"></li>
      <span className="badge bg-success badge-number">3</span>
    </a>

    
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
      <li className="dropdown-header">
        you have new notifications
        <a href="#">
          <span className="badge rounded-pill bg-primary p-3 ms-2">
            View all
          </span>
        </a>
      </li>
      <li>
        <hr className='dropdown-divider'></hr>
      </li>
      <li className="messages-item">
         <a href='#'>
          <img src=''
          alt='me'
          className='rounded-circle'></img>
          <div>
            <h4>
              Ray
            </h4>
            <p>Hello what is going on</p>
            <p>4 hrs. ago</p>
          </div>
         </a>

        
      </li>


      
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li className="messages-item">
         <a href='#'>
          <img src=''
          alt='me'
          className='rounded-circle'></img>
          <div>
            <h4>
              Ray
            </h4>
            <p>Hello what is going on</p>
            <p>4 hrs. ago</p>
          </div>
         </a>
         </li>
     
      <li>
        <hr className="dropdown-divider" />
      </li>

      <li className="messages-item">
         <a href='#'>
          <img src=''
          alt='me'
          className='rounded-circle'></img>
          <div>
            <h4>
              Ray
            </h4>
            <p>Hello what is going on</p>
            <p>4 hrs. ago</p>
          </div>
         </a>
         </li>
      <li>
        <hr className="dropdown-divider" />
      </li>

    

       <li>
        <hr className="dropdown-divider" />
       </li>

       <li className='dropdown-footer'>
        <a href="#"> show all messages</a>
       </li>

    </ul>
  </li>

  )
}

export default NavMessage