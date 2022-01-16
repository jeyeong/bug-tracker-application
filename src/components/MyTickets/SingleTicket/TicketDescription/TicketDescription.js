import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import './TicketDescription.css';

const DescChangeDialog = ({ ticket, setTicket, open, setOpen }) => {
  const [newDesc, setNewDesc] = useState(ticket.description);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setNewDesc(ticket.description), 250);
  }

  const handleConfirm = async () => {
    axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/tickets/change-desc/${ticket.ticket_id}`,
      { description: newDesc }
    );

    setTicket({ ...ticket, description: newDesc });
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
      <DialogTitle>Change ticket description</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          value={newDesc}
          onChange={e => setNewDesc(e.target.value)}
          margin='dense'
          label='Description'
          type='text'
          rows={4}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

const TicketDescription = ({ ticket, setTicket }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='ticket__description'>
      <div className='ticket__description-box'>
        {ticket.description || 'No description'}
      </div>

      <IconButton
        className='ticket__description-edit'
        onClick={() => setOpenDialog(true)}
      >
        <EditIcon />
      </IconButton>

      <DescChangeDialog
        ticket={ticket}
        setTicket={setTicket}
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </div>
  );
}

export default TicketDescription;
