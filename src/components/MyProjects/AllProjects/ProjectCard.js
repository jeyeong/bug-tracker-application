import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectCard.css';

const ProjectCard = ({ project, ticketCounts }) => {
  return (
    <Link
      to={`/projects?id=${project.project_id || ''}`}
      className='projects-card__link-wrapper'
    >
    <div className='projects-card'>
      <span>{project.name}</span>
      <div className='projects-card__tickets'>
        <div className='projects-card__ticket projects-card__ticket__critical'>
          <span className='projects-card__ticket-priority'>
            CRITICAL
          </span>
          <span className='projects-card__ticket-count'>
            {ticketCounts['Critical']}
          </span>
        </div>
        <div className='projects-card__ticket projects-card__ticket__medium'>
          <span className='projects-card__ticket-priority'>
            MEDIUM
          </span>
          <span className='projects-card__ticket-count'>
            {ticketCounts['Medium']}
          </span>
        </div>
        <div className='projects-card__ticket projects-card__ticket__low'>
          <span className='projects-card__ticket-priority'>
            LOW
          </span>
          <span className='projects-card__ticket-count'>
            {ticketCounts['Low']}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProjectCard;
