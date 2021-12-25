import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Unauthorized from '../../components/Unauthorized/Unauthorized';
import SingleProject from './SingleProject';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { CreateProject, ProjectList } from '../../components/ProjectManagement';

import './ManageProjects.css';

const AllProjects = () => {
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

  // Projects
  return (
    <div className='projmgmt'>
      <span className='projmgmt__title'>Manage Projects</span>
      <CreateProject projects={projects} setProjects={setProjects} />
      <ProjectList projects={projects} />
    </div>
  );
}

const ManageProjects = ({ role }) => {
  let [searchParams, _] = useSearchParams();

  if (role !== 'Admin') {
    return <Unauthorized />;
  }

  // Single project
  const project_id = searchParams.get('id')
  if (project_id) {
    return <SingleProject id={project_id} />;
  }

  // All projects
  return <AllProjects />;
}

export default ManageProjects;
