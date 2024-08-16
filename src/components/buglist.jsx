import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './buglist.css';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await axios.get('/api/bugs');
        setBugs(response.data);
      } catch (error) {
        console.error('Error fetching bugs:', error);
      }
    };

    fetchBugs();
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Reporter</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map(bug => (
            <tr key={bug._id}>
              <td>{bug._id}</td>
              <td>{bug.title}</td>
              <td>{bug.reporter}</td>
              <td>{bug.assignee}</td>
              <td>{bug.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default BugList;
