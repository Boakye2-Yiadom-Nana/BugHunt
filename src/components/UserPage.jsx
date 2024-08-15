import React, { useState } from 'react';
import BugCard from './BugCard';
import Filter from './Filter';
import './UserPage.css';
import EmailForm from './EmailForm';


const App = () => {
  const bugs = [
    {
      language: 'Python',
      bug: 'IndentationError: unexpected indent',
      solution: 'Ensure consistent use of either spaces or tabs for indentation throughout the script.',
    },
    {
      language: 'Python',
      bug: "NameError: name 'x' is not defined",
      solution: 'Check for typos or ensure the variable is defined before being used.',
    },
    {
      language: 'Python',
      bug: 'TypeError: unsupported operand type(s)',
      solution: 'Ensure that the operands are of compatible types (e.g., both are integers or strings).',
    },
    {
      language: 'Python',
      bug: "ModuleNotFoundError: No module named 'module_name'",
      solution: 'Make sure the module is installed using pip install module_name and correctly imported.',
    },
    {
      language: 'Python',
      bug: 'IndexError: list index out of range',
      solution: 'Check the list indexing logic to ensure that it does not exceed the list\'s bounds.',
    },
    {
      language: 'Python',
      bug: "KeyError: 'key_name'",
      solution: 'Verify that the key exists in the dictionary before accessing it, or use .get() to handle missing keys.',
    },
    {
      language: 'Python',
      bug: 'ValueError: could not convert string to float',
      solution: 'Ensure that the string being converted is a valid number and doesn’t contain any non-numeric characters.',
    },
    {
      language: 'Python',
      bug: 'ZeroDivisionError: division by zero',
      solution: 'Check that the divisor is not zero before performing division.',
    },
    {
      language: 'Python',
      bug: 'SyntaxError: invalid syntax',
      solution: 'Check for missing colons, unmatched brackets, or other syntax errors in the code.',
    },
    {
      language: 'Python',
      bug: 'AttributeError: object has no attribute',
      solution: 'Ensure the attribute exists for the object or check for typos in the attribute name.',
    },
    {
      language: 'Java',
      bug: 'NullPointerException',
      solution: 'Check for null references before accessing object methods or properties.',
    },
    {
      language: 'Java',
      bug: 'ArrayIndexOutOfBoundsException',
      solution: 'Ensure the array index is within the valid range.',
    },
    {
      language: 'Java',
      bug: 'ClassNotFoundException',
      solution: 'Make sure the class name is correct and the classpath is properly set.',
    },
    {
      language: 'Java',
      bug: 'StackOverflowError',
      solution: 'Avoid excessive recursion or deep call stacks.',
    },
    {
      language: 'Java',
      bug: 'NumberFormatException',
      solution: 'Ensure the string being parsed is a valid number format.',
    },
    {
      language: 'Java',
      bug: 'IllegalArgumentException',
      solution: 'Check that the arguments passed to a method are valid and within the expected range.',
    },
    {
      language: 'Java',
      bug: 'ConcurrentModificationException',
      solution: 'Avoid modifying collections while iterating over them or use iterator.remove().',
    },
    {
      language: 'Java',
      bug: 'OutOfMemoryError',
      solution: 'Increase the JVM heap size or optimize memory usage in the code.',
    },
    {
      language: 'Java',
      bug: 'IllegalStateException',
      solution: 'Ensure the object is in a valid state before invoking methods that rely on that state.',
    },
    {
      language: 'Java',
      bug: 'IOException',
      solution: 'Handle I/O operations carefully and ensure resources like files or streams are properly managed.',
    },
    {
      language: 'C++',
      bug: 'Segmentation fault',
      solution: 'Ensure you are not accessing memory that hasn’t been allocated or is out of bounds.',
    },
    {
      language: 'C++',
      bug: 'Memory leak',
      solution: 'Use smart pointers or ensure that all dynamically allocated memory is freed.',
    },
    {
      language: 'C++',
      bug: 'Undefined reference',
      solution: 'Ensure all necessary functions and variables are properly declared and defined.',
    },
    {
      language: 'C++',
      bug: 'Stack overflow',
      solution: 'Avoid deep or infinite recursion, and ensure function calls are necessary.',
    },
    {
      language: 'C++',
      bug: 'Double free or corruption',
      solution: 'Ensure that dynamically allocated memory is freed only once.',
    },
    {
      language: 'C++',
      bug: 'Use of uninitialized variable',
      solution: 'Initialize variables before use to prevent undefined behavior.',
    },
    {
      language: 'C++',
      bug: 'Buffer overflow',
      solution: 'Ensure that buffer sizes are respected and do not exceed their allocated memory.',
    },
    {
      language: 'C++',
      bug: 'Floating point exception',
      solution: 'Check for division by zero or invalid floating-point operations.',
    },
    {
      language: 'C++',
      bug: 'Invalid pointer dereference',
      solution: 'Ensure pointers are valid before dereferencing them.',
    },
    {
      language: 'C++',
      bug: 'Missing return statement',
      solution: 'Ensure all control paths in a non-void function return a value.',
    },
    {
      language: 'HTML',
      bug: 'Broken layout due to missing tags',
      solution: 'Ensure all opening tags have corresponding closing tags, and elements are nested correctly.',
    },
    {
      language: 'HTML',
      bug: 'Incorrect use of CSS classes',
      solution: 'Ensure that CSS classes are correctly applied to the appropriate HTML elements.',
    },
    {
      language: 'HTML',
      bug: 'Image not displaying',
      solution: 'Check the file path and ensure the image exists at the specified location.',
    },
    {
      language: 'HTML',
      bug: 'Form not submitting',
      solution: 'Check the form’s action attribute and ensure the form fields are correctly named.',
    },
    {
      language: 'HTML',
      bug: 'Unresponsive design',
      solution: 'Use media queries and responsive units like percentages or em/rem instead of fixed pixels.',
    },
    {
      language: 'HTML',
      bug: 'Text overflowing its container',
      solution: 'Use CSS properties like overflow-wrap or white-space to handle long text.',
    },
    {
      language: 'HTML',
      bug: 'Broken links',
      solution: 'Check the href attribute in anchor tags to ensure the URLs are correct.',
    },
    {
      language: 'HTML',
      bug: 'Inconsistent font styles',
      solution: 'Ensure consistent use of font-family across the site or apply a global CSS reset.',
    },
    {
      language: 'HTML',
      bug: 'JavaScript not working',
      solution: 'Ensure the script tag is placed correctly, and the JavaScript file path is correct.',
    },
    {
      language: 'HTML',
      bug: 'CSS not loading',
      solution: 'Check the link tag’s href attribute and ensure the CSS file path is correct.',
    },
    {
      language: 'React',
      bug: 'Component not updating on state change',
      solution: 'Ensure you’re using the state correctly and updating it using setState or useState appropriately.',
    },
    {
      language: 'React',
      bug: 'Component not rendering',
      solution: 'Check if the component is correctly imported and used in the parent component.',
    },
    {
      language: 'React',
      bug: 'Props not being passed correctly',
      solution: 'Ensure that props are being correctly passed and received by child components.',
    },
    {
      language: 'React',
      bug: 'Infinite re-render loop',
      solution: 'Avoid directly setting state inside the render method or useEffect without dependencies.',
    },
    {
      language: 'React',
      bug: 'Unhandled error in component',
      solution: 'Use error boundaries to catch and handle errors within components.',
    },
    {
      language: 'React',
      bug: 'Component not unmounting properly',
      solution: 'Ensure cleanup functions are used in useEffect to handle component unmounting.',
    },
    {
      language: 'React',
      bug: 'Invalid hook call',
      solution: 'Ensure hooks are only called inside functional components or custom hooks.',
    },
    {
      language: 'React',
      bug: 'State not persisting',
      solution: 'Check if the state is being reset on every render; consider using useReducer for complex state.',
    },
    {
      language: 'React',
      bug: 'Performance issues with large lists',
      solution: 'Use React’s virtualized list components or memoization to optimize rendering.',
    },
    {
      language: 'React',
      bug: 'Warning: Each child in a list should have a unique "key" prop',
      solution: 'Ensure that each element in an array or iterator has a unique key prop.',
    },
    {
      language: 'Flutter',
      bug: 'RenderFlex overflowed by pixels',
      solution: 'Wrap the widget in an Expanded or Flexible widget to manage the space it occupies.',
    },
    {
      language: 'Flutter',
      bug: 'Incorrect use of parent data widget',
      solution: 'Ensure the widget is placed inside the correct parent widget that provides necessary data.',
    },
    {
      language: 'Flutter',
      bug: 'State not updating',
      solution: 'Use setState or a state management solution like Provider to update the UI.',
    },
    {
      language: 'Flutter',
      bug: 'Circular dependency error',
      solution: 'Avoid creating circular dependencies between widgets or state objects.',
    },
    {
      language: 'Flutter',
      bug: 'Widget not visible',
      solution: 'Ensure the widget has enough space and is not obscured by other widgets.',
    },
    {
      language: 'Flutter',
      bug: 'Inconsistent state between widgets',
      solution: 'Use a state management solution like Provider, Riverpod, or Bloc to manage shared state.',
    },
    {
      language: 'Flutter',
      bug: 'Slow app performance',
      solution: 'Use lazy loading for widgets and optimize build methods.',
    },
    {
      language: 'Flutter',
      bug: 'Incorrect widget size',
      solution: 'Use MediaQuery or LayoutBuilder to dynamically adjust the widget size based on the screen size.',
    },
    {
      language: 'Flutter',
      bug: 'Widget rebuilding too often',
      solution: 'Use const constructors and keys to prevent unnecessary widget rebuilds.',
    },
    {
      language: 'Flutter',
      bug: 'Error: setState() or markNeedsBuild() called during build',
      solution: 'Avoid calling setState inside the build method or use post-frame callbacks.',
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
    
    <div className='head'>
      <h1>Programming Bugs and Solutions</h1>
      <Filter 
        languages ={languages} 
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
<EmailForm/>

    </div>
  );
};

export default App;
