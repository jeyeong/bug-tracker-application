import React from 'react';
import { Snackbar } from '@mui/material';

function SnackbarAlert({ open, setOpen, message }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

export default SnackbarAlert;