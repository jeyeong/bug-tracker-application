import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { picture } = user;
  const name = user?.given_name || user?.nickname;

  return (
    <div className='profile'>
      <img
        src={picture}
        alt='Profile picture'
        className='profile__picture'
      />
      <span className='profile__welcome'>
        Welcome,<br/>{name}!
      </span>
    </div>
  );
}

export default Profile;
