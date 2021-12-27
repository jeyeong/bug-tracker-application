import React from 'react';
import ProjectName from './ProjectName';
import ProjectDescription from './ProjectDescription';

import './SPNameDescription.css';

const SPNameDescription = ({ name, description, project, setProject }) => {
  return (
    <>
      <ProjectName
        name={name}
        project={project}
        setProject={setProject}
      />
      <ProjectDescription
        description={description}
        project={project}
        setProject={setProject}
      />
    </>
  );
}

export default SPNameDescription;