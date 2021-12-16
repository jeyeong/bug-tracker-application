import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant='contained' className='login__main'
      onClick={() => loginWithRedirect()}
    >
      Login with Auth0
    </Button>
  );
}

export default Auth0Login;
