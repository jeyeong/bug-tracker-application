import React, { useState } from 'react';
import { MainNavbar, Topbar } from '../../components/Navbar';

import './NavbarWrapper.css';

const NavbarScreen = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div
      className={navbarOpen ? 'navbar-screen' : ''}
      onClick={() => setNavbarOpen(false)}
    />
  );
}

const NavbarWrapper = ({ signInMode, setSignInMode, role, children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className='full-view'>
      <MainNavbar
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        signInMode={signInMode}
        setSignInMode={setSignInMode}
        role={role}
      />
      <NavbarScreen
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <div className='post-navbar'>
        <Topbar
          role={role}
          setNavbarOpen={setNavbarOpen}
        />
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default NavbarWrapper;
