import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExistingUsers, UnassignedUsers } from '.';
import SnackbarAlert from '../Alerts/SnackbarAlert';

import './UserManagement.css';

function UserManagement() {
  // Get data from backend API
  const [existingUsers, setExistingUsers] = useState(undefined);
  const [unassignedUsers, setUnassignedUsers] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`)
      .then(res => setExistingUsers(res?.data));
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/unassigned`)
      .then(res => setUnassignedUsers(res?.data));
  }, []);

  // Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <>
      <ExistingUsers
        existingUsers={existingUsers}
        setExistingUsers={setExistingUsers}
        setOpenSnackbar={setOpenSnackbar}
        setSnackbarMessage={setSnackbarMessage}
      />
      <SnackbarAlert
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        message={snackbarMessage}
      />
      <UnassignedUsers
        unassignedUsers={unassignedUsers}
        setUnassignedUsers={setUnassignedUsers}
        existingUsers={existingUsers}
        setExistingUsers={setExistingUsers}
        setOpenSnackbar={setOpenSnackbar}
        setSnackbarMessage={setSnackbarMessage}
      />
    </>
  );
}

export default UserManagement;
