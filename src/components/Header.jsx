import React from 'react';
import './Header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';
import SideBar from './SideBar';


export const Header = () => {
  return (
<header id='header' className='header fixed-top d-flex align-items-center'>
    <Logo/>
      {/* {search bar}*/}
      <SearchBar/>
        {/* {nav}*/}
        <Nav/>
       
</header>
  )
}
