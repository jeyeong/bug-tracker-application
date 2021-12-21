import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BugReportIcon from '@mui/icons-material/BugReport';

function ViewSelector({ setNavbarOpen, role }) {
  const homeView = {title: 'Home', href: '/'};
  const otherViews = (role === 'Admin')
    ? [
      {title: 'Manage Users', href: '/manage-users', icon: GroupAddIcon},
      {title: 'Manage Projects', href: '/manage-projects', icon: AccountTreeIcon},
      {title: 'My Projects', href: '/projects', icon: AssignmentIcon},
      {title: 'My Tickets', href: '/tickets', icon: BugReportIcon},
    ]
    : [
      {title: 'My Projects', href: '/projects', icon: AssignmentIcon},
      {title: 'My Tickets', href: '/tickets', icon: BugReportIcon},
    ];

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
          <Button variant="outlined" onClick={closeNavbar} className='views__other' startIcon={<view.icon />}>
            <span>{view.title}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default ViewSelector;
