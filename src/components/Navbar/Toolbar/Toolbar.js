import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BugReportIcon from '@mui/icons-material/BugReport';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import './Toolbar.css';

function TopToolbar({ setNavbarOpen }) {
  const openNavbar = () => setNavbarOpen(true);

  return (
    <div className='toolbar'>
      <div className='toolbar__menu'>
        <IconButton size='small' onClick={openNavbar}>
          <MenuIcon fontSize='small' />
        </IconButton>
      </div>
      <div className='toolbar__user-icons'>
        <div className='toolbar__dashboard'>
          <IconButton size='small'>
            <DashboardIcon fontSize='small' />
          </IconButton>
        </div>
        <div className='toolbar__notifications'>
          <IconButton size='small'>
            <NotificationsIcon fontSize='small' />
          </IconButton>
        </div>
        <div className='toolbar__profile'>
          <IconButton size='small'>
            <PersonIcon fontSize='small' />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default TopToolbar;
