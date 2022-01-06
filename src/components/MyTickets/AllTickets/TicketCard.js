import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import './TicketCard.css';

const TicketCard = ({ ticket }) => {
  return (
    <div className='ticket-card'>
      <div>
        <div className='ticket-card__id'>
          {`#${ticket.ticket_id}`}
        </div>
        <div className='ticket-card__title'>
          {ticket.title}
        </div>
      </div>
      <Link
        to={`/tickets?id=${ticket.ticket_id || ''}`}
      >
        <Button
          variant='contained' 
          className='ticket-card__details'
        >
          Details
        </Button>
      </Link>
    </div>
  );
}

export default TicketCard;
