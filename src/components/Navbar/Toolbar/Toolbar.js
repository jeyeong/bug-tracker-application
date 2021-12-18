import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import './Toolbar.css';

function Toolbar({ setNavbarOpen }) {
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
          <Link to='/'>
            <IconButton size='small'>
              <DashboardIcon fontSize='small' />
            </IconButton>
          </Link>
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

export default Toolbar;
