import React from 'react';
import { LoginOptions } from '../../components/Login'

import './LoginPage.css';
import logo from '../../assets/img/bug_logo.png'

const LoginPage = ({ setUserID, setSignInMode }) => {
  return (
    <div className='login-page'>
      <img
        src={logo}
        className='login-page__logo'
        alt='Logo'
      />

      <LoginOptions setUserID={setUserID} setSignInMode={setSignInMode} />

      <div className='login-page__footer'>
        Made by James Je Yeong Soh
      </div>
    </div>
  );
}

export default LoginPage;
