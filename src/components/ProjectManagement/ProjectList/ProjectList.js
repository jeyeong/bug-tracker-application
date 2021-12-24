import React from 'react';
import ProjectItem from './ProjectItem';

import './ProjectList.css';

function ProjectList() {
  return (
    <div className='projmgmt-list'>
      <ProjectItem title='Project Title' manager='Bob Smith' />
      <ProjectItem title='Project Title' manager='John Lennon' />
    </div>
  );
}

export default ProjectList;
