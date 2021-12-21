import React from 'react';
import { ExistingUsers } from '../../components/UserManagement';

import './ManageUsers.css';

const ManageUsers = ({ role }) => {
  if (role !== 'Admin') {
    return <div className='usermgmt__unauthorized'>Unauthorized access</div>
  }

  return (
    <div className='usermgmt'>
      <span className='usermgmt__title'>Manage Users</span>
      <span className='usermgmt__edit'>(Double click on a role to edit)</span>
      <div className='usermgmt__panels'>
        <ExistingUsers />
        <div className='usermgmt__unassigned'></div>
      </div>
    </div>
  );
}

export default ManageUsers;
