import React, { useState } from 'react';
import axios from 'axios';
import { ConfirmationDialog } from '../../../Auxiliary';

const TeamLeadBadge = ({ type, id, project, setProject, name, setSnackbarMessage }) => {
  if (type !== 'project-manager') {
    return null;
  }

  const handleLeadChange = () => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/projects/${project.project_id}/manager/${id}`)
    setProject({
      ...project,
      manager_id: id,
    });
    setSnackbarMessage(`Project lead: ${name}`);
  }

  return (
    <span
      className={id === project.manager_id ? 'projmgmt-s-team__lead-badge-main' : 'projmgmt-s-team__lead-badge'}
      onClick={handleLeadChange}
    >
      ★
    </span>
  )
}

const MemberChip = (props) => {
  const {
    type,
    name,
    id,
    team,
    setTeam,
    project,
    setProject,
    setSnackbarMessage,
  } = props;

  const [openDialog, setOpenDialog] = useState(false);

  // Callback function for deletion, to be used by the confirmation dialog
  const deleteMember = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/projects/${project.project_id}/team/${id}`);
    setTeam(team.filter(mem => mem.user_id !== id));
    setSnackbarMessage(`${name} deleted from the project.`);
  }

  const handleDeleteAttempt = () => setOpenDialog(true);

  return (
    <>
      <div className='projmgmt-s-team__chip' id={`chip__${type}`}>
        <span
          className='projmgmt-s-team__delete-member'
          onClick={handleDeleteAttempt}
        >
          x
        </span>
        <TeamLeadBadge
          type={type}
          id={id}
          project={project}
          setProject={setProject}
          name={name}
          setSnackbarMessage={setSnackbarMessage}
        />
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
