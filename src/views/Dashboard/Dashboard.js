import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ProjectCard } from '../../components/MyProjects';
import {
  PriorityCountsChart,
  WeeklyTicketCountChart,
} from '../../components/Dashboard';
import {
  defaultCounts,
  groupTicketCounts,
  countTicketsByPriority,
} from '../../utils/data/ticketCountTools';

import './Dashboard.css';

const Dashboard = ({ uid }) => {
  // Get data from backend API
  const [projects, setProjects] = useState(undefined);
  const [ticketsByProject, setTicketsByProject] = useState(undefined);
  const [ticketsByPriority, setTicketsByPriority] = useState(undefined);
  const [ticketsByWeek, setTicketsByWeek] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    let counter = 3;
  
    // Project list
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/user/${uid}`)
      .then(res => {
        setProjects(res?.data);
        if (--counter === 0) setAppIsLoading(false);
      });

    // Ticket counts
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/tickets/summary/${uid}`)
      .then(res => {
        setTicketsByProject(groupTicketCounts(res?.data || {}));
        setTicketsByPriority(countTicketsByPriority(res?.data || {}));
        if (--counter === 0) setAppIsLoading(false);
      });
    
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/tickets/byweek/${uid}`)
      .then(res => {
        setTicketsByWeek(res?.data || []);
        if (--counter === 0) setAppIsLoading(false);
      });
  }, [uid]);

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className='dashboard'>
      <div className='dashboard__title'>Dashboard</div>
      <div className='dashboard__panels'>
        <div className='dashboard__projects'>
          <span className='dashboard__projects-title'>
            Your Projects
          </span>
          <div className='dashboard__projects-list'>
            <div>
              {projects.map(p => (
                <ProjectCard
                  project={p}
                  ticketCounts={ticketsByProject[p.project_id] || defaultCounts}
                  key={p.project_id}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='dashboard__charts'>
          <span className='dashboard__charts-title'>
            Statistics
          </span>
          <div className='dashboard__charts-body'>
            <div className='dashboard__charts-priority'>
              <PriorityCountsChart data={ticketsByPriority} />
            </div>
            <div className='dashboard__charts-byweek'>
              <WeeklyTicketCountChart data={ticketsByWeek} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
