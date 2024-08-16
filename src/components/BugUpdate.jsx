import React, { useState, useEffect ,useCallback} from 'react';
import axios from 'axios';
import CardFilter from './CardFilter';
import BugReportForm from './BugReportForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BugUpdate.css';

const BugUpdate = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchItems = useCallback(async () => {
    setLoading(true);
      try {
        const email = localStorage.getItem('email'); // Retrieve email from localStorage
        const response = await axios.get(`http://localhost:5000/api/bugs?email=${email}&filter=${filter}`);
        setItems(response.data);
        setError(null);
    } catch (err) {
        setError('Failed to fetch bugs. Please try again later.');
        console.error('Error fetching bugs:', err);
    } finally {
      setLoading(false);
    }
  }, [filter]);
  
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const addBugToList = (newBug) => {
    setItems((prevItems) => [newBug, ...prevItems]);
    fetchItems(); // Refetch the items to ensure consistency with the database
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Open':
        return <span className="badge bg-primary">Open</span>;
      case 'In Progress':
        return <span className="badge bg-warning text-dark">In Progress</span>;
      case 'Closed':
        return <span className="badge bg-success">Closed</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  return (
    <div className='table-container'>
      <BugReportForm addBugToList={addBugToList} />
      <CardFilter filterChange={handleFilterChange} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Reporter</th>
              <th>Status</th>
              <th>Assignee</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.reporter}</td>
                <td>{getStatusBadge(item.status)}</td>
                <td>{item.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BugUpdate;
