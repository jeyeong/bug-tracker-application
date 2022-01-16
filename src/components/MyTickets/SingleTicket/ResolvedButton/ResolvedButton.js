import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

import './ResolvedButton.css';

const ResolvedButton = ({ ticket, setTicket, setSnackbarMessage }) => {
  const changeTicketStatus = () => {
    const newStatus = ticket.status === 'open' ? 'Resolved' : 'Open';

    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/tickets/change-status/${ticket.ticket_id}`,
        { status: newStatus.toLowerCase() }
      );
    setTicket({ ...ticket, status: newStatus.toLowerCase() });
    
    setSnackbarMessage(`Ticket marked as: ${newStatus}`);
  }

  if (ticket.status === 'open') {
    return (
      <div className='ticket__resolved'>
        <Button
          variant='outlined'
          onClick={changeTicketStatus}
        >
          Mark as Resolved
        </Button>
      </div>
    );
  } else {
    return (
      <div className='ticket__resolved'>
        <Button
          variant='contained'
          onClick={changeTicketStatus}
          className='ticket__resolved-button__resolved'
        >
          Resolved
        </Button>
      </div>
    );
  }
}

export default ResolvedButton;
