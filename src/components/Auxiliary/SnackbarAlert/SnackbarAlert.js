import React, { useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';

const SnackbarAlert = ({ message, setMessage }) => {
  const [open, setOpen] = useState(false);

  // When message is set, show snackbar
  useEffect(() => {
    if (message === '') {
      return;
    }
    setOpen(true)
  }, [message]);

  // When snackbar is closed, erase message
  useEffect(() => {
    if (open) {
      return;
    }
    setTimeout(() => setMessage(''), 250);
  }, [open, setMessage]);

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