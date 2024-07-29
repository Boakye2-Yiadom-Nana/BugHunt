import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
  return (
    <div className="search-bar"
    method='POST'
    action='#'>
        <form
      >
   <input
        type="text"
        name="query"
        placeholder='search here...'
        title="Enter search keyword"
        className='search-input'
        />
           <i className="bi bi-search"></i>
       
        </form>
     
        
       
      
     
    </div>
  )
}

export default SearchBar