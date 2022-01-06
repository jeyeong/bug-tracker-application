import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import SingleTicket from './SingleTicket';
import { TicketCard } from '../../components/MyTickets';

import './MyTickets.css';

const Tickets = () => {
  let [searchParams] = useSearchParams();

  // Single ticket
  const ticket_id = searchParams.get('id');
  if (ticket_id) {
    return <SingleTicket tid={ticket_id} />;
  }

  return (
    <div className='tickets'>
      <span className='tickets__title'>Tickets</span>
      <div className='tickets__list'>
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
}

export default Tickets;
