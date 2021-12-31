import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { ProjectCard } from '../../components/MyProjects';
import SingleProject from './SingleProject';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import './Projects.css';

const AllProjects = ({ id }) => {
  // Get data from backend API
  const [projects, setProjects] = useState(undefined);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/user/${id}`)
      .then(res => {
        setProjects(res?.data);
        setAppIsLoading(false);
      });
  }, [id]);

  // Loading screen
  if (appIsLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className='projects'>
      <span className='projects__title'>Projects</span>
      <div className='projects__cards'>
        {projects.map(p => (
          <ProjectCard project={p} key={p.project_id} />
        ))}
      </div>
    </div>
  );
}

const Projects = ({ id }) => {
  let [searchParams] = useSearchParams();

  // Single project
  const project_id = searchParams.get('id')
  if (project_id) {
    return <SingleProject id={project_id} />;
  }

  return <AllProjects id={id} />
}

export default Projects;
