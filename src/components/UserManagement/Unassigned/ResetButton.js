import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

function ResetButton({ setUnassignedUsers, setExistingUsers, setSnackbarMessage }) {
  const handleClick = async () => {
    // Reset unassigned users on the backend
    const message = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/reset`, {});

    // Refresh existing users
    const existing = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
    setExistingUsers(existing?.data);

    // Refresh unassigned users
    const unassigned = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/unassigned`);
    setUnassignedUsers(unassigned?.data);

    // Show confirmation message
    setSnackbarMessage(message?.data);
  }

  return (
    <div className='unasgn-role__reset'>
      <span>For demo purposes:</span>
      <div>
        <Button variant='contained' onClick={handleClick}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default ResetButton;
