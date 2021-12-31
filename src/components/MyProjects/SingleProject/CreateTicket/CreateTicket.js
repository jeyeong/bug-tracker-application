import React, { useState } from 'react';
import { Button } from '@mui/material';
import CreateDialog from './CreateDialog';
import { SnackbarAlert } from '../../../Auxiliary';

import './CreateTicket.css';

const CreateTicket = ({ uid, pid }) => {
  const [openDialog, setOpenDialog] = useState(false);
  
  // Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <div className='project__create-ticket'>
      <Button
        variant='outlined'
        onClick={() => setOpenDialog(true)}
        className='project__create-button'
      >
        Create New Ticket
      </Button>
      <CreateDialog
        open={openDialog}
        setOpen={setOpenDialog}
        uid={uid}
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

export default CreateTicket;
