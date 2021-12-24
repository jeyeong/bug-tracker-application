import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProjectItem = ({ title, manager }) => {
  return (
    <div className='projmgmt-item'>
      <span className='projmgmt-item__title'>{title}</span>
      <div>
        <div className='projmgmt-item__mgr'>
          <span>{manager}</span>
        </div>
        <div className='projmgmt-item__edit'>
          <IconButton>
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;