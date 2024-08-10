import React, { useState } from 'react';
import BugCard from './BugCard';
import Filter from './Filter';
import './UserPage.css';

const App = () => {
  const bugs = [
    {
      language: 'Python',
      bug: 'IndentationError: unexpected indent',
      solution: 'Ensure consistent use of spaces or tabs for indentation throughout the script.',
    },
    {
      language: 'Java',
      bug: 'NullPointerException',
      solution: 'Check for null references before accessing object methods or properties.',
    },
    {
      language: 'C++',
      bug: 'Segmentation fault',
      solution: 'Ensure you are not accessing memory that hasn’t been allocated or is out of bounds.',
    },
    {
      language: 'HTML',
      bug: 'Broken layout due to missing tags',
      solution: 'Ensure all opening tags have corresponding closing tags, and elements are nested correctly.',
    },
    {
      language: 'React',
      bug: 'Component not updating on state change',
      solution: 'Ensure you’re using the state correctly and updating it using setState or useState appropriately.',
    },
    {
      language: 'Flutter',
      bug: 'RenderFlex overflowed by pixels',
      solution: 'Wrap the widget in an Expanded or Flexible widget to manage the space it occupies.',
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const filteredBugs = selectedLanguage
    ? bugs.filter(bug => bug.language === selectedLanguage)
    : bugs;

  const languages = [...new Set(bugs.map(bug => bug.language))];

  return (
    <div>
      <h1>Programming Bugs and Solutions</h1>
      <Filter 
        languages={languages} 
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <div className="bug-list">
        {filteredBugs.map((bugInfo, index) => (
          <BugCard 
            key={index}
            language={bugInfo.language}
            bug={bugInfo.bug}
            solution={bugInfo.solution}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
