import React, { useState } from 'react';
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

const NameChangeDialog = ({ open, setOpen, name }) => {
  const [newName, setNewName] = useState(name);

  const handleNameEdit = e => setNewName(e.target.value);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setNewName(name), 250);
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
        <Button onClick={handleClose}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

const ProjectName = ({ name }) => {
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
        open={openDialog}
        setOpen={setOpenDialog}
        name={name}
      />
      {/* {openDialog
        ? <NameChangeDialog
            open={openDialog}
            setOpen={setOpenDialog}
            name={name}
          />
        : null
      } */}
    </div>
  );
}

export default ProjectName;