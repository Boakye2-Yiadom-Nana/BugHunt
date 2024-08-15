import React from 'react';
import './Filter.css';

const Filter = ({ languages, selectedLanguage, onLanguageChange }) => {
  return (
    <div className="filter-container">
      <select value={selectedLanguage} onChange={onLanguageChange}>
        <option value="">All Languages</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
