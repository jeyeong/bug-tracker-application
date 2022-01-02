import React from 'react';

const TicketList = ({ type, tickets }) => {
  return (
    <div className='project-tickets__list' id={`ticket-list__${type}`}>
      {
        tickets.map(t => (
          <span
            className='project-tickets__list-item'
            key={t.ticket_id}
          >
            {`(#${t.ticket_id}) ${t.title}`}
          </span>
        ))
      }
    </div>
  );
}

export default TicketList;