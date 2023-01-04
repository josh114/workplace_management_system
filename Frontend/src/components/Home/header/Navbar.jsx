import React from 'react';
import Logo from './Logo';
import './header.css';

function Navbar() {
  return (
    <div className='navbar'>
      <Logo />
      <div className='navlinks'>
        <a href='#' className='navlinksitem'>
          Login
        </a>
        <a href='#' className='navlinksitem'>
          Support
        </a>
        <a href='#' className='navlinksitem navlinksitemplus'>
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Navbar;
