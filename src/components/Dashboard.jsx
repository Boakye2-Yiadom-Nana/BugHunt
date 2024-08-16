import React,{useState,useEffect} from 'react';
import './Dashboard.css';
import Card from './Card';
import Reports from './Reports';
const Dashboard = () => {
  return (
    <section className="dashboard-section">
    <div className="row">
        <div className="col-lg-12">
            <div className="row">
          <Card/>
        <div className="col-12">
          <Reports/>
        </div>


            </div>
        </div>
        <div className="col-lg-4">
          {/* <ReportSubmission/> */}
        </div>
    </div>
    </section>

  )
}

export default Dashboard;