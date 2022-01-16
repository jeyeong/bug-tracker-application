import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ResourceNotFound } from '../../components/Errors';
import { BackButton } from '../../components/Auxiliary';
import { CreateTicket, Tickets } from '../../components/MyProjects';

import './SingleProject.css';

const SingleProject = ({ pid, uid }) => {
  // Get data from backend API
  const [project, setProject] = useState(undefined);
  const [tickets, setTickets] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    // Clean up controller
    let isSubscribed = true;

    let counter = 2;

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/${pid}`)
      .then(res => {
        if (isSubscribed) {
          setProject(res?.data);
          if (--counter === 0) setAppIsLoading(false);
        }
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/tickets/project/${pid}`)
      .then(res => {
        if (isSubscribed) {
          setTickets(res?.data);
          if (--counter === 0) setAppIsLoading(false);
        }
      });
    
    // Cancel subscription to useEffect
    return () => (isSubscribed = false);
  }, [pid]);

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  // Project not found (most likely an invalid ID)
  if (!project) {
    return <ResourceNotFound resourceName='Project' />
  }

  return (
    <div className='project'>
      <BackButton
        link='/projects'
      />
      <div className='project__name'>
        <span>{project.name}</span>
        <CreateTicket
          tickets={tickets}
          setTickets={setTickets}
          pid={pid}
          uid={uid}
        />
      </div>
      <span className='project__description'>
        {project.description}
      </span>
      <Tickets tickets={tickets} />
    </div>
  );
}

export default SingleProject;
