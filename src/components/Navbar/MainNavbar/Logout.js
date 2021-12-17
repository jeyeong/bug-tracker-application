import React from 'react';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <div className='logout'>
      <Button
        variant='contained'
        className='logout__button'
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </div>
  );
}

export default Logout;
