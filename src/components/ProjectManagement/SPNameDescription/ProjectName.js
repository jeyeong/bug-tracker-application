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

const NameChangeDialog = ({ name, open, setOpen, project, setProject }) => {
  const [newName, setNewName] = useState(name);

  const handleNameEdit = e => setNewName(e.target.value);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setNewName(name), 250);
  }

  const handleConfirm = async () => {
    await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/projects/change-name/${project.project_id}`,
      { name: newName }
    );
    
    setProject({ ...project, name: newName });
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
      <DialogTitle>Change project name</DialogTitle>
      <DialogContent>
        <TextField
          value={newName}
          onChange={handleNameEdit}
          margin='dense'
          label='Name'
          type='text'
          rows={5}
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

const ProjectName = ({ name, project, setProject }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='projmgmt-s-name'>
      <span className='projmgmt-s-name__title'>
        {name}
      </span>

      <IconButton
        className='projmgmt-s-name__edit'
        onClick={() => setOpenDialog(true)}
      >
        <EditIcon />
      </IconButton>

      <NameChangeDialog
        name={name}
        open={openDialog}
        setOpen={setOpenDialog}
        project={project}
        setProject={setProject}
      />
    </div>
  );
}

export default ProjectName;