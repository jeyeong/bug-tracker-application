import React from 'react';
import { Button } from '@mui/material';

import './TicketCard.css';

const TicketCard = () => {
  return (
    <div className='ticket-card'>
      <div>
        <div className='ticket-card__id'>
          #153
        </div>
        <div className='ticket-card__title'>
          Ticket title
        </div>
      </div>
      <Button
        variant='contained' 
        className='ticket-card__details'
      >
        Details
      </Button>
    </div>
  );
}

export default TicketCard;
