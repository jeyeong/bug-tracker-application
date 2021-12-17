import React from 'react';
import Profile from './Profile';
import ViewSelector from './ViewSelector';
import Logout from './Logout';

import './MainNavbar.css'

const MainNavbar = ({ navbarOpen }) => {
  return (
    <div className={'navbar' + (navbarOpen ? ' navbar__open' : '')}>
      <Profile />
      <ViewSelector />
      <Logout />
    </div>
  );
}

export default MainNavbar;
