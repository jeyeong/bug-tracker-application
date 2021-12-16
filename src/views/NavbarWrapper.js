import React from 'react';
import { SideNavbar } from '../components/Navbar';

import './NavbarWrapper.css'

const NavbarWrapper = ({ children }) => {
  return (
    <div>
      <SideNavbar />
      <div className='content'>
        {children}
      </div>
    </div>
  );
}

export default NavbarWrapper;
