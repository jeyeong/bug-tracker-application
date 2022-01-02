import React from 'react';
import TicketList from './TicketList';

import './Tickets.css';

const Tickets = () => {
  return (
    <div className='project-tickets'>
      <div className='project-tickets__panel'>
        <span className='project-tickets__panel-title'>CRITICAL</span>
        <TicketList />
      </div>
      <div className='project-tickets__panel'>
        <span className='project-tickets__panel-title'>MEDIUM</span>
      </div>
      <div className='project-tickets__panel'>
        <span className='project-tickets__panel-title'>LOW</span>
      </div>
    </div>
  );
}

export default Tickets;
