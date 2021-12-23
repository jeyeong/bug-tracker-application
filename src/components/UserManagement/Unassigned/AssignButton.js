import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

function AssignButton({ selectedIndex, role, unassignedUsers, setUnassignedUsers,
  existingUsers, setExistingUsers, setOpenSnackbar, setSnackbarMessage }) {

  const handleSubmit = () => {
    // Error handling
    if (role === '') {
      setSnackbarMessage('Error: Please select a role.');
      return;
    }

    if (selectedIndex >= unassignedUsers.length) {
      return;
    }

    // New user
    const newUser = {
      ...unassignedUsers[selectedIndex],
      role: role
    };

    // Update backend
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/users/`, newUser);

    // Update frontend
    setExistingUsers(existingUsers.concat(newUser).sort(
      (a, b) => a.user_id > b.user_id ? 1 : -1
    ));
    setUnassignedUsers(unassignedUsers.filter((_, i) => i !== selectedIndex));

    // Set snackbar cofirmation message
    setSnackbarMessage(`${newUser.first_name} ${newUser.last_name} assigned as: ${newUser.role}`);
  };

  return (
    <div className='unasgn-role__assign'>
      <Button variant="contained" onClick={handleSubmit}>
        Assign
      </Button>
    </div>
  );
}

export default AssignButton;