import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import CustomTheme from './utils/material-ui/CustomTheme';

import {
  LoadingScreen,
  LoginPage,
  Dashboard,
  ManageUsers,
  ManageProjects,
  Projects,
  Tickets,
  NavbarWrapper,
} from './views';

const App = () => {
  // Sign-in and user ID
  const [appIsLoading, setAppIsLoading] = useState(false);
  const [signInMode, setSignInMode] = useState('auth0');
  const [userID, setUserID] = useState(undefined);
  const [role, setRole] = useState(undefined);

  // Get role from backend API
  useEffect(() => {
    setAppIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${userID}`)
      .then(res => {
        setRole(res?.data?.role);
        setAppIsLoading(false);
      });
  }, [userID])

  // Auth0
  const { user, isLoading } = useAuth0();
  const userIDAuth0 = user?.sub.match(/[^|]*$/)[0];

  if (signInMode === 'auth0' && userID !== userIDAuth0) {
    setUserID(userIDAuth0);
  }

  // Views
  if (isLoading || appIsLoading) {
    return <LoadingScreen />;
  }

  if (userID === undefined) {
    return <LoginPage setUserID={setUserID} setSignInMode={setSignInMode} />;
  }

  return (
    <div className="app">
      <NavbarWrapper
        signInMode={signInMode}
        setSignInMode={setSignInMode}
        role={role}
      >
        <CustomTheme>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/manage-users' element={<ManageUsers role={role} />} />
            <Route path='/manage-projects' element={<ManageProjects role={role} />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/tickets' element={<Tickets />} />
          </Routes>
        </CustomTheme>
      </NavbarWrapper>
    </div>
  );
}

export default App;
