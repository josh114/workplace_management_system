import React from 'react';
import logo from './durbanWorkplace.jpg';
import Tooltip from '@mui/material/Tooltip';
import './login.css';
import sideImg from './worldwide.png';
const Logo = () => {
  return (
    <Tooltip title={<h1 style={{ fontSize: 14 }}>Durban WorkPlace</h1>}>
      <div>
        <img
          src={logo}
          alt='durban-logo'
          style={{ width: 40, borderRadius: 5 }}
        />
      </div>
    </Tooltip>
  );
};
const SideBar = () => {
  return (
    <div className='reg-sidebar'>
      <Logo />
      <div className='reg-sidebar_text'>
        <h1>Hire Internationally with complete confidence</h1>
        <p>
          We'll handle your worldwide compliance, payroll, and benefits, so you
          can fast-track your international expansion.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
