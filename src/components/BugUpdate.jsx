import React, { useState, useEffect } from 'react';
import CardFilter from './CardFilter';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap CSS
import './BugUpdate.css';

const BugUpdate = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  // Example useEffect to simulate fetching items
  useEffect(() => {
    // Fetch items based on the filter
    const fetchItems = async () => {
      // Example fetching logic
      // const response = await fetch(`api/bugs?filter=${filter}`);
      // const data = await response.json();
      // setItems(data);

      // For demonstration purposes, we'll just set a static list
      const demoItems =  [
        { id: 1, description: 'Bug 1', reporter: 'Alice', status: 'Open', assignee: 'Bob', date: 'Today' },
        { id: 2, description: 'Bug 2', reporter: 'Charlie', status: 'In Progress', assignee: 'Dave', date: 'This Month' },
        { id: 3, description: 'Bug 3', reporter: 'Eve', status: 'Closed', assignee: 'Frank', date: 'This Year' },
        { id: 4, description: 'Bug 4', reporter: 'Grace', status: 'Open', assignee: 'Heidi', date: 'Today' },
        { id: 5, description: 'Bug 5', reporter: 'Ivan', status: 'In Progress', assignee: 'Judy', date: 'This Year' },
        { id: 6, description: 'Bug 6', reporter: 'Mallory', status: 'Closed', assignee: 'Niaj', date: 'This Month' },
        { id: 7, description: 'Bug 7', reporter: 'Olivia', status: 'Closed', assignee: 'Peggy', date: 'Today' },
        { id: 8, description: 'Bug 8', reporter: 'Alice', status: 'Open', assignee: 'Bob', date: 'This Month' },
        { id: 9, description: 'Bug 9', reporter: 'Charlie', status: 'In Progress', assignee: 'Dave', date: 'This Year' },
        { id: 10, description: 'Bug 10', reporter: 'Eve', status: 'Closed', assignee: 'Frank', date: 'Today' },
        { id: 11, description: 'Bug 11', reporter: 'Grace', status: 'Open', assignee: 'Heidi', date: 'This Month' },
        { id: 12, description: 'Bug 12', reporter: 'Ivan', status: 'In Progress', assignee: 'Judy', date: 'This Year' },
        { id: 13, description: 'Bug 13', reporter: 'Mallory', status: 'Closed', assignee: 'Niaj', date: 'Today' },
        { id: 14, description: 'Bug 14', reporter: 'Olivia', status: 'Open', assignee: 'Peggy', date: 'This Month' },
        { id: 15, description: 'Bug 15', reporter: 'Alice', status: 'In Progress', assignee: 'Bob', date: 'This Year' },
        { id: 16, description: 'Bug 16', reporter: 'Charlie', status: 'Closed', assignee: 'Dave', date: 'Today' },
        { id: 17, description: 'Bug 17', reporter: 'Eve', status: 'Open', assignee: 'Frank', date: 'This Month' },
        { id: 18, description: 'Bug 18', reporter: 'Grace', status: 'In Progress', assignee: 'Heidi', date: 'This Year' },
        { id: 19, description: 'Bug 19', reporter: 'Ivan', status: 'Closed', assignee: 'Judy', date: 'Today' },
        { id: 20, description: 'Bug 20', reporter: 'Mallory', status: 'Open', assignee: 'Niaj', date: 'This Month' },
      ];
      const filteredItems = demoItems.filter(item => item.date === filter);
      setItems(filteredItems);
    };

    fetchItems();
  }, [filter]); // Dependency array to re-fetch items when filter changes

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Open':
        return <span className="badge bg-warning">{status}</span>;
      case 'In Progress':
        return <span className="badge bg-primary">{status}</span>;
      case 'Closed':
        return <span className="badge bg-success">{status}</span>;
      default:
        return <span className="badge bg-danger">{status}</span>;
    }
  };

  return (
    <div>
      <h1 className='BugH1'>Bug Updates</h1>
      <CardFilter filterChange={handleFilterChange} />
      <table className="table table-striped">
        <thead>
          <tr>
          <th>Description</th>
            <th>Reporter</th>
            <th>Status</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
         <td>{item.description}</td>
              <td>{item.reporter}</td>
              <td>{getStatusBadge(item.status)}</td>
              <td>{item.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BugUpdate;
