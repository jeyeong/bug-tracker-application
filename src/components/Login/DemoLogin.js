import React from 'react';
import { Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const DemoLogin = () => {
  return (
    <div className='login__demo'>
      <span>Demo:</span>
      <div className='login__demo-users'>
        <Tooltip title="Admin" arrow>
          <div className='login__demo-user' id='admin'>
            <PersonIcon />
          </div>
        </Tooltip>

        <Tooltip title="Project Manager" arrow>
          <div className='login__demo-user' id='project-manager'>
            <PersonIcon />
          </div>
        </Tooltip>

        <Tooltip title="Developer" arrow>
          <div className='login__demo-user' id='developer'>
            <PersonIcon />
          </div>
        </Tooltip>

        <Tooltip title="Submitter" arrow>
          <div className='login__demo-user' id='submitter'>
            <PersonIcon />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default DemoLogin;
