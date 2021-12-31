import React from 'react';
import { Button } from '@mui/material';

import './CreateTicket.css';

function CreateTicket() {
  return (
    <div className='project__create-ticket'>
      <Button variant='outlined'>
        Create New Ticket
      </Button>
    </div>
  );
}

export default CreateTicket;
