import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ResourceNotFound } from '../../components/Errors';
import {
  BackButton,
  CreateTicket,
  Tickets,
} from '../../components/MyProjects';

import './SingleProject.css';

const SingleProject = ({ id }) => {
  // Get data from backend API
  const [project, setProject] = useState(undefined);
  const [tickets, setTickets] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    // Clean up controller
    let isSubscribed = true;

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`)
      .then(res => {
        if (isSubscribed) {
          setProject(res?.data);
          setAppIsLoading(false);
        }
      });
    
    // Cancel subscription to useEffect
    return () => (isSubscribed = false);
  }, [id]);

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
      <BackButton />
      <div className='project__name'>
        <span>{project.name}</span>
        <CreateTicket uid={id} pid={project.project_id} />
      </div>
      <span className='project__description'>{project.description}</span>
      <Tickets />
    </div>
  );
}

export default SingleProject;
