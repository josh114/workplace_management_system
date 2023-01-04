import React from 'react';
import durbanlogo from './durbanWorkplace.jpg';
import Tooltip from '@mui/material/Tooltip';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import { IconButton } from '@mui/material';
const icons = [NotificationsNoneOutlinedIcon, InboxIcon];
function Navbar() {
  return (
    <div className='db-navbar'>
      <div className='topItems'>
        <img src={durbanlogo} alt='durban logo' className='dblogo' />
        <Tooltip
          title={<h1 style={{ fontSize: 16 }}>Notification</h1>}
          arrow
          placement='right'
        >
          <IconButton>
            <NotificationsNoneOutlinedIcon
              sx={{ fontSize: 40, color: 'white' }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={<h1 style={{ fontSize: 16 }}>Inbox</h1>}
          arrow
          placement='right'
        >
          <IconButton>
            <InboxIcon sx={{ fontSize: 40, color: 'white' }} />
          </IconButton>
        </Tooltip>
      </div>
      <div className='bottomItems'></div>
    </div>
  );
}

export default Navbar;
