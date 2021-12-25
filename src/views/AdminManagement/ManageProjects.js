import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unauthorized from '../../components/Unauthorized/Unauthorized';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { CreateProject, ProjectList } from '../../components/ProjectManagement';

import './ManageProjects.css';

const ManageProjectsDisplay = () => {
  // Get data from backend API
  const [projects, setProjects] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects`)
      .then(res => {
        setProjects(res?.data);
        setAppIsLoading(false);
      });
  }, []);

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  // Project management view
  return (
    <div className='projmgmt'>
      <span className='projmgmt__title'>Manage Projects</span>
      <CreateProject projects={projects} setProjects={setProjects} />
      <ProjectList projects={projects} />
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
