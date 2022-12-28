import React from 'react';
import durbanWorkplace from './durbanWorkplace.jpg';
import './header.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navlogo'>
        <img src={durbanWorkplace} alt='durban-logo' className='logo' />
        <h2 className='logo-letter'>Durban WorkPlace</h2>
      </div>
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
