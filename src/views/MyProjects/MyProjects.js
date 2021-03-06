import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ProjectCard } from '../../components/MyProjects';
import { useSearchParams } from 'react-router-dom';
import SingleProject from './SingleProject';
import SingleTicket from '../MyTickets/SingleTicket';
import { defaultCounts, groupTicketCounts } from '../../utils/data/ticketCountTools';

import './MyProjects.css';

const AllProjects = ({ uid }) => {
  // Get data from backend API
  const [projects, setProjects] = useState(undefined);
  const [ticketSummary, setTicketSummary] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    let counter = 2;
  
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/user/${uid}`)
      .then(res => {
        setProjects(res?.data);
        if (--counter === 0) setAppIsLoading(false);
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/tickets/summary/${uid}`)
      .then(res => {
        setTicketSummary(groupTicketCounts(res?.data || []));
        if (--counter === 0) setAppIsLoading(false);
      });
  }, [uid]);

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className='projects'>
      <span className='projects__title'>Projects</span>
      <div className='projects__cards'>
        {projects.map(p => (
          <ProjectCard
            project={p}
            ticketCounts={ticketSummary[p.project_id] || defaultCounts}
            key={p.project_id}
          />
        ))}
      </div>
    </div>
  );
}

const MyProjects = ({ uid }) => {
  let [searchParams] = useSearchParams();

  // Single project
  const projectID = searchParams.get('id');
  const ticketID = searchParams.get('tid');

  if (projectID && ticketID) {
    return (
      <SingleTicket
        tid={ticketID}
        returnLink={`/projects?id=${projectID}`}
      />
    );
  }

  if (projectID) {
    return (
      <SingleProject
        pid={projectID}
        uid={uid}
      />
    );
  }

  return <AllProjects uid={uid} />
}

export default MyProjects;
