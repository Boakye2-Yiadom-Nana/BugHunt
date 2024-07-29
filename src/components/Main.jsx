import React from 'react';
import './Main.css';
import PageTitle from './PageTitle';
import Dashboard from './Dashboard';
const Main = () => {
  return (
    <main  className='main'>
   <PageTitle page= "Dashboard" />
   <Dashboard/>
    </main>
)

    }

export default Main