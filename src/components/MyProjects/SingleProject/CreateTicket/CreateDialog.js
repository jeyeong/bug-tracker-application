import React, { useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';

const priorities = [
  'Low',
  'Medium',
  'Critical',
]

const CreateDialog = ({ open, setOpen, uid, pid, setSnackbarMessage }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(priorities[0]);

  const handleClose = () => setOpen(false);

  const handleCreate = () => {
    if (title === '') {
      setSnackbarMessage('Error: Please enter a ticket title.');
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/tickets`,
        {
          project_id: pid,
          title: title,
          description: description,
          priority: priority,
          submitter_id: uid,
        }
      )
      .then(res => {})
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth='xs'
    >
      <DialogTitle>Create a new ticket</DialogTitle>
      <DialogContent>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          margin='dense'
          label='Title'
          type='text'
          fullWidth
        />
        <TextField
          multiline
          value={description}
          onChange={e => setDescription(e.target.value)}
          margin='normal'
          label='Description'
          type='text'
          rows={5}
          fullWidth
        />
        <TextField
          select
          label='Priority'
          value={priority}
          onChange={e => setPriority(e.target.value)}
          margin='normal'
        >
          {priorities.map(option => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions className='project__create-actions'>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateDialog;
