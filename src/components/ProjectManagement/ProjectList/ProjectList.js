import React from 'react';
import ProjectItem from './ProjectItem';

import './ProjectList.css';

function ProjectList({ projects }) {
  return (
    <div className='projmgmt-list'>
      {projects.map(p => (
        <ProjectItem
          title={p.name}
          manager={`${p.first_name} ${p.last_name}`}
          key={p.project_id}
        />
      ))}
    </div>
  );
}

export default ProjectList;
