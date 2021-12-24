import React from 'react';

const ProjectItem = ({ title, manager }) => {
  return (
    <div className='projmgmt-list__item'>
      <span className='projmgmt-list__title'>{title}</span>
      <div className='projmgmt-list__mgr'>
        <span>Manager: {manager}</span>
      </div>
    </div>
  );
}

export default ProjectItem;