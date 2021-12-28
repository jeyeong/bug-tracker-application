import React, { useState } from 'react';
import { ConfirmationDialog } from '../../Auxiliary';

const MemberChip = ({ type, name, id, team, setTeam }) => {
  const [openDialog, setOpenDialog] = useState(false);

  // Callback function for deletion, to be used by the confirmation dialog
  const deleteMember = () => {
    console.log('deleted');
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
            message='Delete this user?'
            action={deleteMember}
          />
        : null
      }
    </>
  );
}

export default MemberChip;
