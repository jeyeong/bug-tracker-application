import React from 'react';
import ProjectName from './ProjectName';
import ProjectDescription from './ProjectDescription';

import './SPNameDescription.css';

const SPNameDescription = ({ name, description }) => {
  return (
    <>
      <ProjectName name={name} />
      <ProjectDescription description={description} />
    </>
  );
}

export default SPNameDescription;