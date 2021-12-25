import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Unauthorized } from '../../components/Errors';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Existing, Unassigned } from '../../components/UserManagement';
import { SnackbarAlert } from '../../components/Alerts';

import './ManageUsers.css';

const ManageUsersDisplay = () => {
  // Get data from backend API
  const [existingUsers, setExistingUsers] = useState(undefined);
  const [unassignedUsers, setUnassignedUsers] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    let counter = 2;  // for synchronous fetching
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`)
      .then(res => {
        setExistingUsers(res?.data);
        if (--counter === 0) setAppIsLoading(false);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/unassigned`)
      .then(res => {
        setUnassignedUsers(res?.data);
        if (--counter === 0) setAppIsLoading(false);
      });
  }, []);

  // Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // When snackbar message is set, show snackbar
  useEffect(() => {
    if (snackbarMessage === '') {
      return;
    }
    setOpenSnackbar(true)
  }, [snackbarMessage]);

  // When snackbar is closed, erase snackbar message
  useEffect(() => {
    if (openSnackbar) {
      return;
    }
    setSnackbarMessage('');
  }, [openSnackbar]);

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  // User management view
  return (
    <div className='usermgmt'>
      <span className='usermgmt__title'>Manage Users</span>
      <span className='usermgmt__edit'>(Double click on a role to edit)</span>
      <div className='usermgmt__panels'>
        <Existing
          existingUsers={existingUsers}
          setExistingUsers={setExistingUsers}
          setSnackbarMessage={setSnackbarMessage}
        />
        <SnackbarAlert
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          message={snackbarMessage}
        />
        <Unassigned
          unassignedUsers={unassignedUsers}
          setUnassignedUsers={setUnassignedUsers}
          existingUsers={existingUsers}
          setExistingUsers={setExistingUsers}
          setSnackbarMessage={setSnackbarMessage}
        />
      </div>
    </div>
  );
}

const ManageUsers = ({ role }) => {
  if (role !== 'Admin') {
    return <Unauthorized />;
  }

  return <ManageUsersDisplay />
}

export default ManageUsers;
