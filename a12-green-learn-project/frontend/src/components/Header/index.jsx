import React from 'react';
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Landing from '../Landing';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Topbar />
      <Navbar />
      <Landing />
    </header>
  );
};

export default Header;
