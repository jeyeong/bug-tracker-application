import React from 'react';
import { Link } from 'react-router-dom';

import './SideNavbar.css'

const Links = () => {
  return (
    <ul>
      <li><Link to="/">Dashboard Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/tickets">Tickets</Link></li>
    </ul>
  );
}

const SideNavbar = () => {
  return (
    <div className='navbar'>
      <Links />
    </div>
  );
}

export default SideNavbar;
