import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const RoleSelector = ({ unassignedUsers, setUnassignedUsers, selectedIndex,
  existingUsers, setExistingUsers, setOpenSnackbar, setSnackbarMessage }) => {
  const [role, setRole] = useState('');

  const handleChange = event => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    if (role === '' || selectedIndex >= unassignedUsers.length) {
      return;
    }

    const newUser = { ...unassignedUsers[selectedIndex], role: role };
    setExistingUsers(existingUsers.concat(newUser));
    setUnassignedUsers(unassignedUsers.filter((u, i) => i !== selectedIndex));
    
    setSnackbarMessage(`${newUser.first_name} ${newUser.last_name} assigned as: ${newUser.role}`);
    setOpenSnackbar(true);
  };

  return (
    <div className='unasgn-role'>
      <FormControl fullWidth className='unasgn-role__select'>
        <InputLabel id='unassigned-role'>Role</InputLabel>
        <Select
          labelId='unassigned-role'
          id="unassigned-role-select"
          value={role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={'Submitter'}>Submitter</MenuItem>
          <MenuItem value={'Developer'}>Developer</MenuItem>
          <MenuItem value={'Project Manager'}>Project Manager</MenuItem>
        </Select>
      </FormControl>
      <div className='unasgn-role__button'>
        <Button variant="contained" onClick={handleSubmit}>
          Assign
        </Button>
      </div>
    </div>
  );
}

export default RoleSelector;