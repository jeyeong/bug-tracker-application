import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ConfirmationDialog } from '../../../Auxiliary';

import './DeleteProject.css';

const DeleteProject = ({ id, setSnackbarMessage }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dialogMessage = `
    Delete this project? This will permanently erase all tickets.
  `

  const navigate = useNavigate();

  const handleDelete = async () => {
    if (id === '1' || id === '2') {
      setSnackbarMessage('Error: Cannot delete demo projects.');
      return;
    }

    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`);
    navigate('/manage-projects');
  }

  return (
    <div className='projmgmt-s-delete'>
      <Button
        variant='contained'
        color='error'
        onClick={() => setOpenDialog(true)}
      >
        Delete Project
      </Button>
      <ConfirmationDialog
        open={openDialog}
        setOpen={setOpenDialog}
        message={dialogMessage}
        action={handleDelete}
      />
    </div>
  );
}

export default DeleteProject;
