import React from 'react';
import UtilityBar from './UtilityBar';
import ProjectList from './ProjectList';

import './ProjectPanel.css';

function ProjectPanel() {
  return (
    <div>
      <UtilityBar />
      <ProjectList />
    </div>
  );
}

export default ProjectPanel;
