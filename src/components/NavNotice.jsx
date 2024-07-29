import React from 'react'

const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <li className="bi bi-bell"></li>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notification">
        <li className="dropdown-header">
          you have new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'></hr>
        </li>
        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4> are u doing</h4>
            <p>welcome to my page</p>
            <p>30 min .ago</p>
          </div>
        </li>
        
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className='notification-item'>
        <i className=' bi bi-x-circle text-danger'></i>
        <div>
          <h4> kiriku</h4>
          <p>what happened</p>
          <p>1 hr .ago</p>
        </div>
        </li>
       
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className='notification-item'>
        <i className=' bi bi-check-circle text-success'></i>
        <div>
          <h4> kiriku</h4>
          <p>what happened</p>
          <p>2 hr .ago</p>
        </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className='notification-item'>
        <i className=' bi bi-info-circle text-primary'></i>
        <div>
          <h4> kiriku</h4>
          <p>what happened</p>
          <p>4 hr .ago</p>
        </div>
        </li>

         <li>
          <hr className="dropdown-divider" />
         </li>

         <li className='dropdown-footer'>
          <a href="#"> show all notification</a>
         </li>

      </ul>
    </li>

  )
}

export default NavNotice