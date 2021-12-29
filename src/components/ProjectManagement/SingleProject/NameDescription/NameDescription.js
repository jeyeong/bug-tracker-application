import React from 'react';
import ProjectName from './ProjectName';
import ProjectDescription from './ProjectDescription';

import './NameDescription.css';

const NameDescription = ({ name, description, project, setProject }) => {
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

export default NameDescription;