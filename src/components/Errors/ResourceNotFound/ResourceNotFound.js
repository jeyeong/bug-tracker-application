import React from 'react';

import './ResourceNotFound.css';

const ResourceNotFound = ({ resourceName }) => {
  return (
    <div className='resource-not-found'>
      {resourceName} not found
    </div>
  );
}

export default ResourceNotFound;
