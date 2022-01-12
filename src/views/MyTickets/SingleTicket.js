import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ResourceNotFound } from '../../components/Errors';
import { SnackbarAlert } from '../../components/Auxiliary';

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

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  // Ticket not found (most likely an invalid ID)
  if (!ticket) {
    return <ResourceNotFound resourceName='Ticket' />;
  }

  return (
    <div>
      Single Ticket {tid}
    </div>
  );
}

export default SingleTicket;
