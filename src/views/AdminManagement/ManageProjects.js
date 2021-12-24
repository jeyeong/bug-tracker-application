import React from 'react';
import Unauthorized from '../../components/Unauthorized/Unauthorized';
import { CreateProject, ProjectList } from '../../components/ProjectManagement';

import './ManageProjects.css';

const ManageProjectsDisplay = () => {
  return (
    <div className='projmgmt'>
      <span className='projmgmt__title'>Manage Projects</span>
      <CreateProject />
      <ProjectList />
    </div>
  );
}

const ManageProjects = ({ role }) => {
  if (role !== 'Admin') {
    return <Unauthorized />;
  }

  return <ManageProjectsDisplay />;
}

export default ManageProjects;
