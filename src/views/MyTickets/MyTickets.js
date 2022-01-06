import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { TicketCard } from '../../components/MyTickets';
import SingleTicket from './SingleTicket';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import './MyTickets.css';

const AllTickets = ({ uid }) => {
  // Get data from backend API
  const [tickets, setTickets] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/tickets/user/${uid}`
      );

      setTickets(res?.data);
      setAppIsLoading(false);
    }
    fetchData();
  }, [uid])

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className='tickets'>
      <span className='tickets__title'>Tickets</span>
      <div className='tickets__list'>
        {
          tickets.map(ticket => (
            <TicketCard
              ticket={ticket}
              key={ticket.ticket_id}
            />
          ))
        }
      </div>
    </div>
  )
}

const MyTickets = ({ uid }) => {
  let [searchParams] = useSearchParams();

  // Single ticket
  const ticket_id = searchParams.get('id');
  if (ticket_id) {
    return <SingleTicket tid={ticket_id} />;
  }

  return <AllTickets uid={uid} />;
}

export default MyTickets;
