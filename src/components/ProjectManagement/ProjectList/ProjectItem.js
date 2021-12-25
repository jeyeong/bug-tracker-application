import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProjectItem = ({ title, manager, id }) => {
  return (
    <div className='projmgmt-item'>
      <span className='projmgmt-item__title'>{title}</span>
      <div>
        <div className='projmgmt-item__mgr'>
          <span>{manager}</span>
        </div>
        <div className='projmgmt-item__edit'>
          <Link to={`/manage-projects?id=${id}`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;