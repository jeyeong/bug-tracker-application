import React from 'react';
import { Button } from '@mui/material';

import './CreateProject.css';

const CreateProject = () => {
  return (
    <div className='projmgmt-create'>
      <Button
        variant='contained'
        className='projmgmt-create__button'
      >
        Create
      </Button>
    </div>
  );
}

export default CreateProject;