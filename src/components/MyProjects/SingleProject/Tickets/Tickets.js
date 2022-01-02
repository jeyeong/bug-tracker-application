import React from 'react';
import TicketList from './TicketList';

import './Tickets.css';

// Helper function that groups tickets by priority
const groupByPriority = tickets => {
  const rv = {
    'Critical': [],
    'Medium': [],
    'Low': [],
  };

  tickets.forEach(t => {
    if (t.priority) {
      rv[t.priority].push(t);
    }
  });

  return rv;
};

const Tickets = ({ tickets }) => {
  const groupedTickets = groupByPriority(tickets);

  return (
    <div className='project-tickets'>
      <div className='project-tickets__panel'>
        <span className='project-tickets__panel-title'>CRITICAL</span>
        <TicketList
          type='critical'
          tickets={groupedTickets['Critical']}
        />
      </div>
      <div className='project-tickets__panel'>
        <span className='project-tickets__panel-title'>MEDIUM</span>
        <TicketList
          type='medium'
          tickets={groupedTickets['Medium']}
        />
      </div>
      <div className='project-tickets__panel'>
        <span className='project-tickets__panel-title'>LOW</span>
        <TicketList
          type='low'
          tickets={groupedTickets['Low']}
        />
      </div>
    </div>
  );
}

export default Tickets;
