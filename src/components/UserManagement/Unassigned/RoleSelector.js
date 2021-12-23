import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const RoleSelector = ({ role, setRole }) => {
  const handleChange = event => {
    setRole(event.target.value);
  };

  return (
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
  );
}

export default RoleSelector;