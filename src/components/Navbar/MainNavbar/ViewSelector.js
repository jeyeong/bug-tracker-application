import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function ViewSelector({ setNavbarOpen }) {
  const homeView = {title: 'Home', href: '/'}
  const otherViews = [
    {title: 'My Projects', href: '/projects'},
    {title: 'My Tickets', href: '/tickets'},
  ]

  const closeNavbar = () => setNavbarOpen(false);

  return (
    <div className='views'>
      <Link to={homeView.href} className='views__link'>
        <Button variant="contained" onClick={closeNavbar} className='views__home'>
          <span>{homeView.title}</span>
        </Button>
      </Link>

      {otherViews.map(view => (
        <Link to={view.href} className='views__link' key={view.title}>
          <Button variant="outlined" onClick={closeNavbar} className='views__other'>
            <span>{view.title}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default ViewSelector;
