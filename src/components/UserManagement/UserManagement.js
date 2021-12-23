import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Existing, Unassigned } from '.';
import SnackbarAlert from '../Alerts/SnackbarAlert';

import './UserManagement.css';

const UserManagement = () => {
  // Get data from backend API
  const [existingUsers, setExistingUsers] = useState(undefined);
  const [unassignedUsers, setUnassignedUsers] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`)
      .then(res => setExistingUsers(res?.data));
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/unassigned`)
      .then(res => setUnassignedUsers(res?.data));
  }, []);

  // Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    if (snackbarMessage === '') {
      return;
    }
    setOpenSnackbar(true)
  }, [snackbarMessage]);

  return (
    <>
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
    </>
  );
}

export default UserManagement;
