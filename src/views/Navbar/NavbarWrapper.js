import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const NavbarWrapper = ({ signInMode, setSignInMode, userID, children }) => {
  const [role, setRole] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://bug-tracker-backend-jy.herokuapp.com/data?id=${userID}`)
      .then(res => setRole(res?.data[0].role));
  }, [userID])

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div>
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
