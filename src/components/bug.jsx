import React from 'react';
import { Header } from './Header';
import SideBar from './SideBar';
import Main from './Main';
import BugUpdate from './BugUpdate';
import Dashboard from './Dashboard';
import './Dashboard.css';
import './bug.css';

const BugPage = () => {
    return (
      <div className='hello'>
        <Header />
        <div className='sidebar'>
               <SideBar />
        </div>
        <div className='reportform'>
          <BugUpdate />
        </div>
        
  
        <Main />
        </div>
    );
  }
  
  export default BugPage;