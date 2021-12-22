import React from 'react';
import UserManagement from '../../components/UserManagement/UserManagement';

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
        <UserManagement />
      </div>
    </div>
  );
}

export default ManageUsers;
