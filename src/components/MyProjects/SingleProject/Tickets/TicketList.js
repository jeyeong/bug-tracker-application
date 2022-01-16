import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TicketList = ({ type, tickets }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = (ticket_id) => {
    const newRoute = `${location.pathname}${location.search}&tid=${ticket_id}`;
    navigate(newRoute);
  }

  return (
    <div className='project-tickets__list' id={`ticket-list__${type}`}>
      {
        tickets.map(t => (
          <span
            className='project-tickets__list-item'
            key={t.ticket_id}
            onClick={() => redirect(t.ticket_id)}
          >
            {`(#${t.ticket_id}) ${t.title}`}
          </span>
        ))
      }
    </div>
  );
}

export default TicketList;