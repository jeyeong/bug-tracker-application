import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

const UserList = ({ unassignedUsers, selectedIndex, setSelectedIndex }) => {
  const handleListItemClick = (e, index) => setSelectedIndex(index);

  return (
    <div className='unasgn-list'>
      <List>
        {unassignedUsers.map((u, i) => {
          const this_index = i;
          return (
            <ListItemButton
              selected={selectedIndex === this_index}
              onClick={e => handleListItemClick(e, this_index)}
              key={u.user_id}
            >
              <ListItemText primary={`${u.first_name} ${u.last_name}`} />
            </ListItemButton>
          )
        })}
      </List>
    </div>
  );
}

export default UserList;