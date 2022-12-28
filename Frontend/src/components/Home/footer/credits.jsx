import React from 'react';
import './footer.css';

function Credits() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <h2 className='footerCredits'>
        &copy; {year}{' '}
        <a href='github.com/josh114'>
          all rights reserved <span>Durban WorkPlace</span>
        </a>
      </h2>
    </div>
  );
}

export default Credits;
