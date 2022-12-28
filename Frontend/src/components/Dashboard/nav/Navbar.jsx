import React from 'react';
import durbanlogo from './durbanWorkplace.jpg';
function Navbar() {
  return (
    <div className='db-navbar'>
      <div className='topItems'>
        <img src={durbanlogo} alt='durban logo' className='dblogo' />
        <ion-icon name='notifications-outline'></ion-icon>
        <ion-icon name='folder-open-outline'></ion-icon>
        <ion-icon name='star-outline'></ion-icon>
      </div>
      <div className='bottomItems'>
        <ion-icon name='person-add-outline'></ion-icon>
        <ion-icon name='search-outline'></ion-icon>
      </div>
    </div>
  );
}

export default Navbar;
