import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ResourceNotFound } from '../../components/Errors';
import { BackButton, SnackbarAlert } from '../../components/Auxiliary';
import {
  ResetButton,
  NameDescription,
  Team,
  DeleteProject
} from '../../components/ProjectManagement';

import './SingleProject.css';

const SingleProject = ({ id }) => {
  // Get data from backend API
  const [project, setProject] = useState(undefined);
  const [team, setTeam] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    let counter = 2;  // for synchronous fetching
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`)
      .then(res => {
        if (res?.data) {
          setProject(res.data);
        }
        if (--counter === 0) setAppIsLoading(false);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/team`)
      .then(res => {
        setTeam(res?.data);
        if (--counter === 0) setAppIsLoading(false);
      });
  }, [id]);

  // Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  // Project not found (most likely an invalid ID)
  if (!project) {
    return <ResourceNotFound resourceName='Project' />;
  }

  // Project
  return (
    <div className='projmgmt-s'>
      <div className='projmgmt-s__top-buttons'>
        <BackButton
          link='/manage-projects'
        />
        <ResetButton
          id={id}
          setProject={setProject}
          setTeam={setTeam}
        />
      </div>
      <NameDescription
        name={project.name}
        description={project.description}
        project={project}
        setProject={setProject}
      />
      <Team
        team={team}
        setTeam={setTeam}
        project={project}
        setProject={setProject}
        setSnackbarMessage={setSnackbarMessage}
      />
      <DeleteProject
        id={id}
        setSnackbarMessage={setSnackbarMessage}
      />
      <SnackbarAlert
        message={snackbarMessage}
        setMessage={setSnackbarMessage}
      />
    </div>
  );
}

export default SingleProject;
