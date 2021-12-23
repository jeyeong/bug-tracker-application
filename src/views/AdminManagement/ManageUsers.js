import React from 'react';
import { UserPanel } from '../../components/UserManagement';
import Unauthorized from '../../components/Unauthorized/Unauthorized';

import './ManageUsers.css';

const ManageUsers = ({ role }) => {
  if (role !== 'Admin') {
    return <Unauthorized />
  }

  return (
    <div className='usermgmt'>
      <span className='usermgmt__title'>Manage Users</span>
      <span className='usermgmt__edit'>(Double click on a role to edit)</span>
      <div className='usermgmt__panels'>
        <UserPanel />
      </div>
    </div>
  );
}

export default ManageUsers;
