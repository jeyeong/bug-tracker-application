import React from 'react';
import ProjectItem from './ProjectItem';

import './ProjectList.css';

function ProjectList({ projects }) {
  return (
    <div className='projmgmt-list'>
      {projects.map(p => {
        const manager = p?.first_name && p?.last_name
          ? `${p.first_name} ${p.last_name}`
          : '';

        return (
          <ProjectItem
            title={p.name}
            manager={manager}
            id={p.project_id}
            key={p.project_id}
          />
        )
      })}
    </div>
  );
}

export default ProjectList;
