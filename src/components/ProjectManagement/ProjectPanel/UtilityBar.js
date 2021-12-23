import React from 'react';
import { Button } from '@mui/material';

function UtilityBar() {
  return (
    <div className='projmgmt-util'>
      <Button
        variant='contained'
        className='projmgmt-util__create'
      >
        Create
      </Button>
    </div>
  );
}

export default UtilityBar;