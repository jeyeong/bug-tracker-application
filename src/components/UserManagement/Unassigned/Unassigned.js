import React, { useState } from 'react';
import UserList from './UserList';
import RoleSelector from './RoleSelector';
import AssignButton from './AssignButton';
import ResetButton from './ResetButton';

import './Unassigned.css';

const Unassigned = ({ unassignedUsers, setUnassignedUsers, existingUsers,
  setExistingUsers, setSnackbarMessage }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [role, setRole] = useState('');

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
              <div className='unasgn-role'>
                <RoleSelector
                  role={role}
                  setRole={setRole}
                />
                <AssignButton
                  selectedIndex={selectedIndex}
                  role={role}
                  unassignedUsers={unassignedUsers}
                  setUnassignedUsers={setUnassignedUsers}
                  existingUsers={existingUsers}
                  setExistingUsers={setExistingUsers}
                  setSnackbarMessage={setSnackbarMessage}
                />
                <ResetButton
                  setUnassignedUsers={setUnassignedUsers}
                  setExistingUsers={setExistingUsers}
                  setSnackbarMessage={setSnackbarMessage}
                />
              </div>
            </>
          : null
        }
      </div>
    </div>
  );
}

export default Unassigned;