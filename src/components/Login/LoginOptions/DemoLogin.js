import React from 'react';
import { Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const DemoLogin = ({ setUserID, setSignInMode }) => {
  const handleDemoUser = userID => {
    setSignInMode('loading');  // simulate loading
    setTimeout(() => setSignInMode('demo'), 1000);
    setUserID(userID);
  }

  return (
    <div className='login__demo'>
      <span>Demo:</span>
      <div className='login__demo-users'>
        <Tooltip title="Admin" arrow>
          <div
            className='login__demo-user'
            id='admin'
            onClick={() => handleDemoUser('2222')}
          >
            <PersonIcon />
          </div>
        </Tooltip>

        <Tooltip title="Project Manager" arrow>
          <div
            className='login__demo-user'
            id='project-manager'
            onClick={() => handleDemoUser('3333')}
          >
            <PersonIcon />
          </div>
        </Tooltip>

        <Tooltip title="Developer" arrow>
          <div
            className='login__demo-user' 
            id='developer'
            onClick={() => handleDemoUser('4444')}
          >
            <PersonIcon />
          </div>
        </Tooltip>

        <Tooltip title="Submitter" arrow>
          <div
            className='login__demo-user' 
            id='submitter'
            onClick={() => handleDemoUser('5555')}
          >
            <PersonIcon />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default DemoLogin;
