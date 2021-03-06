import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

const CreateDialog = ({ open, setOpen, projects, setProjects }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => setOpen(false);

  const handleCreate = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/projects`,
        { name: name, description: description }
      )
      .then(res => {
        const newProject = {
          project_id: res?.data?.project_id,
          name: name,
          description: description,
        }
        setProjects(projects.concat(newProject));
        setName('');
        setDescription('');
        handleClose();
      });
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a new project</DialogTitle>
      <DialogContent>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          margin='dense'
          label='Name'
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateDialog;
