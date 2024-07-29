import React, { useState } from 'react';
import './CardFilter.css'; // Ensure you have appropriate styles

const CardFilter = ({ filterChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterChange = (filter) => {
    filterChange(filter);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="filter">
      <button onClick={toggleDropdown} className="icon">
        <i className="bi bi-three-dots"></i>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow show">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleFilterChange('Today')}>
              Today
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleFilterChange('This Year')}>
              This Year
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleFilterChange('This Month')}>
              This Month
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CardFilter;
