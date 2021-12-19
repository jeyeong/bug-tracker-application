import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import './Topbar.css';

const Topbar = ({ role, setNavbarOpen }) => {
  const openNavbar = () => setNavbarOpen(true);

  return (
    <div className='topbar'>
      <div className='topbar__menu'>
        <IconButton size='small' onClick={openNavbar}>
          <MenuIcon fontSize='small' />
        </IconButton>
      </div>
      <div className='topbar__role'>
        Logged in as: <span className='topbar__rolename'>{role}</span>
      </div>
      <div className='topbar__user-icons'>
        <div className='topbar__dashboard'>
          <Link to='/'>
            <IconButton size='small'>
              <DashboardIcon fontSize='small' />
            </IconButton>
          </Link>
        </div>
        <div className='topbar__notifications'>
          <IconButton size='small'>
            <NotificationsIcon fontSize='small' />
          </IconButton>
        </div>
        <div className='topbar__profile'>
          <IconButton size='small'>
            <PersonIcon fontSize='small' />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
