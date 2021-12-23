import React from 'react';
import Unauthorized from '../../components/Unauthorized/Unauthorized';
import { ProjectPanel } from '../../components/ProjectManagement';

import './ManageProjects.css';

const ManageProjects = ({ role }) => {
  if (role !== 'Admin') {
    return <Unauthorized />
  }

  return (
    <div className='projmgmt'>
      <span className='projmgmt__title'>Manage Projects</span>
      <ProjectPanel />
    </div>
  );
}

export default ManageProjects;
