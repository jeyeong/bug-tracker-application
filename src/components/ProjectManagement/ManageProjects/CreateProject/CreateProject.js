import React, { useState } from 'react';
import { Button } from '@mui/material';
import CreateDialog from './CreateDialog';

import './CreateProject.css';

const CreateProject = ({ projects, setProjects }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='projmgmt-create'>
      <Button
        variant='contained'
        className='projmgmt-create__button'
        onClick={() => setOpenDialog(true)}
      >
        Create
      </Button>
      <CreateDialog
        open={openDialog}
        setOpen={setOpenDialog}
        projects={projects}
        setProjects={setProjects}
      />
    </div>
  );
}

export default CreateProject;