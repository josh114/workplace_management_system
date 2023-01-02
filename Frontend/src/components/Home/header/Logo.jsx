import React from 'react';
import durbanWorkplace from './durbanWorkplace.jpg';

function Logo() {
  return (
    <div className='navlogo'>
      <img src={durbanWorkplace} alt='durban-logo' className='logo' />
      <h2 className='logo-letter'>Durban WorkPlace</h2>
    </div>
  );
}

export default Logo;
