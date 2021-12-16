import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const WelcomeMessage = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  console.log(name, picture, email);

  return (
    <div>
      
    </div>
  );
}

export default WelcomeMessage;
