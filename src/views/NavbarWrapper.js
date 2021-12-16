import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const NavbarWrapper = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      {children}
    </div>
  );
}

export default NavbarWrapper;
