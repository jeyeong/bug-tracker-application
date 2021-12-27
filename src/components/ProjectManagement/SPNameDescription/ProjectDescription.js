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

const NameChangeDialog = ({ description, open, setOpen, project, setProject }) => {
  const [newDesc, setNewDesc] = useState(description);

  const handleDescEdit = e => setNewDesc(e.target.value);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setNewDesc(description), 250);
  }

  const handleConfirm = async () => {
    axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/projects/change-desc/${project.project_id}`,
      { description: newDesc }
    );

    setProject({ ...project, description: newDesc });
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
      <DialogTitle>Change project description</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          value={newDesc}
          onChange={handleDescEdit}
          margin='dense'
          label='Description'
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

const ProjectDescription = ({ description, project, setProject }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='projmgmt-s-desc'>
      <div className='projmgmt-s-desc__box'>
        {description}
      </div>

      <IconButton
        className='projmgmt-s-desc__edit'
        onClick={() => setOpenDialog(true)}
      >
        <EditIcon />
      </IconButton>

      <NameChangeDialog
        description={description}
        open={openDialog}
        setOpen={setOpenDialog}
        project={project}
        setProject={setProject}
      />
    </div>
  );
}

export default ProjectDescription;
