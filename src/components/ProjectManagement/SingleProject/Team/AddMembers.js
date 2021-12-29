import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddMemberDialog from './AddMemberDialog.js';
import { SnackbarAlert } from '../../../Auxiliary';

const AddMembers = ({ team, setTeam, pid }) => {
  const [open, setOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`)
      .then(res => {
        if (res?.data) {
          setAllUsers(res.data);
        }
      });
  }, []);

  return (
    <div className='project-s-team__add-button'>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon />
      </IconButton>
      <AddMemberDialog
        open={open}
        setOpen={setOpen}
        allUsers={allUsers}
        team={team}
        setTeam={setTeam}
        pid={pid}
        setSnackbarMessage={setSnackbarMessage}
      />
      <SnackbarAlert
        message={snackbarMessage}
        setMessage={setSnackbarMessage}
      />
    </div>
  );
}

export default AddMembers;