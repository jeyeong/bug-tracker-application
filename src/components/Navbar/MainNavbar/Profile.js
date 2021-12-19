import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PersonIcon from '@mui/icons-material/Person';
import defaultPicture from '../../../assets/img/default_profile_pic.png';

const ProfilePicture = ({ signInMode, picture }) => {
  if (signInMode === 'auth0') {
    return (
      <img
        src={picture}
        alt='Profile Pic'
        className='profile__picture'
      />
    )
  }

  return (
    <div className='profile__picture-demo' id={picture}>
      <PersonIcon fontSize='large' />
    </div>
  )
}

const Profile = ({ signInMode, role }) => {
  const { user } = useAuth0();

  let name;
  let picture;
  if (signInMode === 'auth0') {
    name = user?.given_name || user?.nickname || 'user';
    picture = user?.picture || defaultPicture;
  } else {
    if (role === 'Admin') {
      name = 'Demo Admin';
      picture = 'admin'
    } else if (role === 'Project Manager') {
      name = 'Demo PM';
      picture = 'project-manager';
    } else if (role === 'Developer') {
      name = 'Demo Developer';
      picture = 'developer';
    } else {
      name = 'Demo Submitter';
      picture = 'submitter';
    }
  }

  return (
    <div className='profile'>
      <ProfilePicture
        signInMode={signInMode}
        picture={picture}
      />
      <span className='profile__welcome'>
        Welcome,<br/>{name}!
      </span>
    </div>
  );
}

export default Profile;
