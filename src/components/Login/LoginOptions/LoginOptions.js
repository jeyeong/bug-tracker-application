import React from 'react';
import Auth0Login from './Auth0Login';
import DemoLogin from './DemoLogin';

import './LoginOptions.css';

const LoginOptions = ({ setUserID, setSignInMode }) => {
  return (
    <div>
      <div className='login'>
        <Auth0Login />
        <DemoLogin
          setUserID={setUserID}
          setSignInMode={setSignInMode}
        />
      </div>
    </div>
  );
}

export default LoginOptions;

