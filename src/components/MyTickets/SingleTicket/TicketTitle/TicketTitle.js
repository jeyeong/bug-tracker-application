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

import './TicketTitle.css';

const TitleChangeDialog = ({ ticket, setTicket, open, setOpen }) => {
  const [newTitle, setNewTitle] = useState(ticket.title);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setNewTitle(ticket.title), 250);
  }

  const handleConfirm = async () => {
    axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/tickets/change-title/${ticket.ticket_id}`,
      { title: newTitle }
    );

    setTicket({ ...ticket, title: newTitle });
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
      <DialogTitle>Change ticket title</DialogTitle>
      <DialogContent>
        <TextField
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          margin='dense'
          label='Title'
          type='text'
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

const TicketTitle = ({ ticket, setTicket }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='ticket__title'>
      <div
        className='ticket__title-id'
        id={`title-id__${ticket.priority.toLowerCase()}`}
      >
        {ticket.ticket_id}
      </div>

      <div className='ticket__title-text'>
        {ticket.title}
      </div>

      <div className='ticket__title-edit'>
        <IconButton
          className='ticket__title-edit__icon'
          onClick={() => setOpenDialog(true)}
        >
          <EditIcon />
        </IconButton>
      </div>

      <TitleChangeDialog
        ticket={ticket}
        setTicket={setTicket}
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </div>
  );
}

export default TicketTitle;
