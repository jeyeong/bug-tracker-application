import React, { useState } from 'react';
import {
  Dialog,
  TextField,
  List,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';

const AddMemberDialog = ({ open, setOpen, allUsers, team, setTeam }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClose = () => setOpen(false);
  const handleListItemClick = (e, index) => setSelectedIndex(index);

  // Filter users by search term
  const re = new RegExp(search, 'i');
  const filteredUsers = allUsers.filter(
    u => u.first_name.match(re) || u.last_name.match(re)
  );

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
      <div className='project-s-team__add-dialog'>
        <span
          className='projmgmt-s-team__close-dialog'
          onClick={handleClose}
        >
          ×
        </span>

        <TextField
          value={search}
          onChange={e => setSearch(e.target.value)}
          label='Search'
          variant='outlined'
          fullWidth
        />

        <div className='project-s-team__filtered-users'>
          <div>
          <List>
            {filteredUsers.map((u, i) => {
              const this_index = i;
              return (
                <ListItemButton
                  selected={selectedIndex === this_index}
                  onClick={e => handleListItemClick(e, this_index)}
                  key={u.user_id}
                >
                  <ListItemText
                    primary={`${u.first_name} ${u.last_name}`}
                    secondary={`${u.role}`}
                  />
                </ListItemButton>
              )
            })}
          </List>
          </div>
        </div>

        <div className='project-s-team__add-member'>
          <Button variant='contained'>Add</Button>
        </div>
      </div>
    </Dialog>
  )
}

export default AddMemberDialog;
