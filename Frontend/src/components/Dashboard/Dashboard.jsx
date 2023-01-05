import React from 'react';
import Navbar from './nav/Navbar';
import './dashboard.css';
import { useState } from 'react';
import Profile from './Profile';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [wrkName, setWrkName] = useState('Software Dev');
  const [wrkDesc, setWrkDesc] = useState(
    'add description of your project here'
  );
  return (
    <div className='dsh'>
      <Navbar />
      <div className='dsh-content'>
        <div className='dsh-content_header'>
          <div className='dsh-content_name'>
            <h1>{wrkName}</h1>
            <p>{wrkDesc}</p>
          </div>
          <div className='dsh-profile'>
            <Profile />
          </div>
        </div>
        <div className='dsh-content_body'>
          <div className='dsh-content_body-topitems'>
            <IconButton>
              <Button variant='contained' className='dshBut'>
                New Task
              </Button>
            </IconButton>
            <IconButton>
              <Button variant='contained' className='dshBut'>
                Create Team
              </Button>
            </IconButton>
            <IconButton>
              <Button variant='contained' className='dshBut'>
                Assign Team
              </Button>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
