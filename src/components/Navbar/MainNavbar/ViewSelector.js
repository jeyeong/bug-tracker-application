import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function ViewSelector() {
  const homeView = {title: 'Home', href: '/'}
  const otherViews = [
    {title: 'My Projects', href: '/projects'},
    {title: 'My Tickets', href: '/tickets'},
  ]

  return (
    <div className='views'>
      <Button variant="contained">
        <Link to={homeView.href} className='views__home'>
          <span>{homeView.title}</span>
        </Link>
      </Button>

      {otherViews.map(view => (
        <Button variant="outlined" key={view.title}>
          <Link to={view.href} className='views__other'>
            <span>{view.title}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default ViewSelector;
