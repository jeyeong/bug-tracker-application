import React from 'react';
import Profile from './Profile';
import ViewSelector from './ViewSelector';
import Logout from './Logout';

import './MainNavbar.css'

const MainNavbar = ({ navbarOpen, setNavbarOpen, signInMode, setSignInMode, role }) => {
  return (
    <div className={'navbar' + (navbarOpen ? ' navbar__open' : '')}>
      <Profile
        signInMode={signInMode}
        role={role}
      />
      <ViewSelector setNavbarOpen={setNavbarOpen} />
      <Logout setSignInMode={setSignInMode} />
    </div>
  );
}

export default MainNavbar;
