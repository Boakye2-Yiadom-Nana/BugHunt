import React from 'react';
import { Header } from './Header';
import SideBar from './SideBar';
import Main from './Main';
// import ReportSubmission from './ReportSubmission';
import Dashboard from './Dashboard';
import './Dashboard.css';
// import UserPage from './UserPage';

const DashboardPage = () => {
  return (
    <div className='hello'>
      <Header />
      <SideBar />

      <Dashboard/>
      <Main />


    </div>
  );
}

export default DashboardPage;
