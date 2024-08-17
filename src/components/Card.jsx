import React, { useEffect, useState } from 'react';
import './Card.css';
import CountUp from 'react-countup';
import axios from 'axios';

const Card = () => {
  const [reportedBugs, setReportedBugs] = useState(0);
  const [solvedBugs, setSolvedBugs] = useState(0);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const authHeader = `Bearer ${token}`;

        const response = await axios.get('http://localhost:5000/api/userdata', {
          headers: { 'Authorization': authHeader }
        });

        setReportedBugs(response.data.reportedBugsCount);
        setSolvedBugs(response.data.solvedBugsCount);
        setUserName(response.data.userName);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <ul className="cards">
      <div className="reported">
        <li className='bi bi-bug-fill'>
          <span>Reported Bugs</span>
          <h1><CountUp end={reportedBugs} /></h1>
          <i className="bi bi-activity"></i>
        </li>
      </div>

      <div className="users">
        <li className='bi bi-person-fill'>
          <span>User</span>
          <h1>{userName}</h1>
          <i className="bi bi-activity"> Logged In</i>
        </li>
      </div>

      <div className="solved">
        <li className='bi bi-bug'>
          <span>Solved Bugs</span>
          <h1><CountUp end={solvedBugs} /></h1>
          <i className="bi bi-activity"></i>
        </li>
      </div>
    </ul>
  );
}

export default Card;
