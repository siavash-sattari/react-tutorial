import React from 'react';
import Navbar from '../Navbar';
import Topbar from '../Topbar';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
