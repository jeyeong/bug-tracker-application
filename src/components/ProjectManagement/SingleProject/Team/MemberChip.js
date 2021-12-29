import React, { useState } from 'react';
import axios from 'axios';
import { ConfirmationDialog } from '../../../Auxiliary';

const MemberChip = (props) => {
  const {
    type,
    name,
    id,
    team,
    setTeam,
    pid,
    setSnackbarMessage,
  } = props;

  const [openDialog, setOpenDialog] = useState(false);

  // Callback function for deletion, to be used by the confirmation dialog
  const deleteMember = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/projects/${pid}/team/${id}`);
    setTeam(team.filter(mem => mem.user_id !== id));
    setSnackbarMessage(`${name} deleted from the project.`);
  }

  const handleDeleteAttempt = () => setOpenDialog(true);

  return (
    <>
      <div className='projmgmt-s-team__chip' id={`chip__${type ?? 'submitter'}`}>
        <span
          className='projmgmt-s-team__delete-member'
          onClick={handleDeleteAttempt}
        >
          x
        </span>
        {name}
      </div>
      {openDialog
        ? <ConfirmationDialog
            open={openDialog}
            setOpen={setOpenDialog}
            message={`Delete ${name} from this project?`}
            action={deleteMember}
          />
        : null
      }
    </>
  );
}

export default MemberChip;
