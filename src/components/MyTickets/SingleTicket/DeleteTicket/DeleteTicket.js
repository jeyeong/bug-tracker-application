import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ConfirmationDialog } from '../../../Auxiliary';

import './DeleteTicket.css';

const DeleteTicket = ({ id, link }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dialogMessage = `
    Delete this ticket? This will permanently erase the ticket.
  `

  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tickets/${id}`);
    navigate(link);
  }

  return (
    <div className='ticket__delete'>
      <Button
        variant='contained'
        color='error'
        onClick={() => setOpenDialog(true)}
      >
        Delete Ticket
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

export default DeleteTicket;
