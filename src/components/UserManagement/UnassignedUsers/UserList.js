import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

const UserList = ({ unassignedUsers, selectedIndex, setSelectedIndex }) => {
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className='unasgn-list'>
      <List>
        {unassignedUsers.map((u, i) => {
          const btn_idx = i;
          return (
            <ListItemButton
              selected={selectedIndex === btn_idx}
              onClick={event => handleListItemClick(event, btn_idx)}
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


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// export default function SelectedListItem() {
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItemButton
//           selected={selectedIndex === 0}
//           onClick={(event) => handleListItemClick(event, 0)}
//         >
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 1}
//           onClick={(event) => handleListItemClick(event, 1)}
//         >
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </ListItemButton>
//       </List>
//       <Divider />
//       <List component="nav" aria-label="secondary mailbox folder">
//         <ListItemButton
//           selected={selectedIndex === 2}
//           onClick={(event) => handleListItemClick(event, 2)}
//         >
//           <ListItemText primary="Trash" />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 3}
//           onClick={(event) => handleListItemClick(event, 3)}
//         >
//           <ListItemText primary="Spam" />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// }