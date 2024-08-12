import React from 'react';
import './BugCard.css';

const BugCard = ({ language, bug, solution }) => {
  return (
    <div className="bug-card">
      <h3>{language}</h3>
      <p><strong>Bug:</strong> {bug}</p>
      <p><strong>Solution:</strong> {solution}</p>
    </div>
  );
};


export default BugCard;
