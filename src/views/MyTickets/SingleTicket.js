import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ResourceNotFound } from '../../components/Errors';
import { BackButton, SnackbarAlert } from '../../components/Auxiliary';
import {
  TicketTitle,
  TicketDescription,
  ResolvedButton,
  DeleteTicket,
} from '../../components/MyTickets';

import './SingleTicket.css';

const SingleTicket = ({ tid }) => {
  // Get data from backend API
  const [ticket, setTicket] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    // Clean up controller
    let isSubscribed = true;

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/tickets/${tid}`)
      .then(res => {
        if (isSubscribed) {
          setTicket(res?.data);
          setAppIsLoading(false);
        }
      });

    return () => (isSubscribed = false);
  }, [tid])

  // Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  // Ticket not found (most likely an invalid ID)
  if (!ticket) {
    return <ResourceNotFound resourceName='Ticket' />;
  }

  return (
    <div className='ticket'>
      <div className='ticket__top-buttons'>
        <BackButton
          link='/tickets'
        />
        <ResolvedButton
          ticket={ticket}
          setTicket={setTicket}
          setSnackbarMessage={setSnackbarMessage}
        />
      </div>
      <TicketTitle
        ticket={ticket}
        setTicket={setTicket}
      />
      <TicketDescription
        ticket={ticket}
        setTicket={setTicket}
      />
      <DeleteTicket
        id={ticket.ticket_id}
        link='/tickets'
      />
      <SnackbarAlert
        message={snackbarMessage}
        setMessage={setSnackbarMessage}
      />
    </div>
  );
}

export default SingleTicket;
