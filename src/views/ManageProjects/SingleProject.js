import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ResourceNotFound } from '../../components/Errors';
import {
  SPBackButton,
  SPNameDescription,
} from '../../components/ProjectManagement';

import './SingleProject.css';

const SingleProject = ({ id }) => {
  // Get data from backend API
  const [project, setProject] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`)
      .then(res => {
        if (res?.data) {
          setProject(res.data);
        }
        setAppIsLoading(false);
      });
  }, [id]);

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  // Project not found (most likely an invalid ID)
  if (!project) {
    return <ResourceNotFound resourceName='Project' />
  }

  // Project
  return (
    <div className='projmgmt-s'>
      <SPBackButton />
      <SPNameDescription
        name={project.name}
        description={project.description}
        project={project}
        setProject={setProject}
      />
    </div>
  );
}

export default SingleProject;
