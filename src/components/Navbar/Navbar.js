import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/">Dashboard Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/tickets">Tickets</Link></li>
    </ul>
  );
}

export default Navbar;
