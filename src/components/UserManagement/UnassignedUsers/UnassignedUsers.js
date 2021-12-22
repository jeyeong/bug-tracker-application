import React, { useState } from 'react';
import UserList from './UserList';

import '../UserManagement.css';
import RoleSelector from './RoleSelector';

const UnassignedUsers = ({ unassignedUsers, setUnassignedUsers, existingUsers,
  setExistingUsers, setOpenSnackbar, setSnackbarMessage }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='unasgn-users'>
      <div className='unasgn-users__title'>Unassigned</div>
      <div className='unasgn-users__frame'>
        {unassignedUsers
          ? <>
              <UserList
                unassignedUsers={unassignedUsers}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              <RoleSelector
                unassignedUsers={unassignedUsers}
                setUnassignedUsers={setUnassignedUsers}
                selectedIndex={selectedIndex}
                existingUsers={existingUsers}
                setExistingUsers={setExistingUsers}
                setOpenSnackbar={setOpenSnackbar}
                setSnackbarMessage={setSnackbarMessage}
              />
            </>
          : null
        }
      </div>
    </div>
  );
}

export default UnassignedUsers;