import React from 'react';
import UserTable from './UserTable';

const ExistingUsers = ({ existingUsers, setExistingUsers, setOpenSnackbar,
  setSnackbarMessage }) => {
  return (
    <div className='exst-users'>
      <div className='exst-users__title'>Existing</div>
      <div className='exst-users__frame'>
        {existingUsers
          ? <UserTable
              data={existingUsers}
              setData={setExistingUsers}
              setOpenSnackbar={setOpenSnackbar}
              setSnackbarMessage={setSnackbarMessage}
            />
          : null
        }
      </div>
    </div>
  );
}

export default ExistingUsers;