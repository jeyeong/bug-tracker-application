import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExistingUsersTable from './ExistingUsersTable';

import './ExistingUsers.css';

const ExistingUsers = () => {
  const [existingUsers, setExistingUsers] = useState(undefined);

  useEffect(() => {
    axios
      .get('https://bug-tracker-backend-jy.herokuapp.com/users')
      .then(res => setExistingUsers(res?.data));
  }, []);

  return (
    <div className='exst-users'>
      <div className='exst-users__title'>Existing</div>
      <div className='exst-users__frame'>
        <ExistingUsersTable
          data={existingUsers}
          setData={setExistingUsers}
        />
      </div>
    </div>
  );
}

export default ExistingUsers;