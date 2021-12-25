import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import './SPBackButton.css';

const SPBackButton = () => {
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

export default SPBackButton;
