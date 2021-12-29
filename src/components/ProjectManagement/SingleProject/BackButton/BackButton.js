import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import './BackButton.css';

const BackButton = () => {
  return (
    <Link to='/manage-projects'>
      <Button
        variant='contained' 
        className='projmgmt-s__back-btn'
      >
        Back
      </Button>
    </Link>
  );
}

export default BackButton;
