import React, { useState } from 'react';
import { MainNavbar, Toolbar } from '../../components/Navbar';

import './NavbarWrapper.css';

const NavbarScreen = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div
      className={navbarOpen ? 'navbar-screen' : ''}
      onClick={() => setNavbarOpen(false)}
    />
  );
}

const NavbarWrapper = ({ signInMode, setSignInMode, userID, children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div>
      <MainNavbar
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        signInMode={signInMode}
        setSignInMode={setSignInMode}
        userID={userID}
      />
      <NavbarScreen
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <div className='post-navbar'>
        <Toolbar setNavbarOpen={setNavbarOpen} />
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default NavbarWrapper;
