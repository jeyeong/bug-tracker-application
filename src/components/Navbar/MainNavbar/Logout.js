import React from 'react';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = ({ setSignInMode }) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout();
    setTimeout(() => setSignInMode('auth0'), 500);
  }

  return (
    <div className='logout'>
      <Button
        variant='contained'
        className='logout__button'
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </div>
  );
}

export default Logout;
