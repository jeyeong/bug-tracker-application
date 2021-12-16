import React from 'react';
import Auth0Login from './Auth0Login';
import DemoLogin from './DemoLogin';

import './LoginOptions.css';

const LoginOptions = () => {
  return (
    <div>
      <div className='login'>
        <Auth0Login />
        <DemoLogin />
      </div>
    </div>
  );
}

export default LoginOptions;

