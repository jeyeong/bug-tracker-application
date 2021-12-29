import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import AddMembers from './AddMembers';
import Members from './Members';

import './Team.css';

const Team = ({ team, setTeam, project, setProject }) => {
  return (
    <>
      <div className='projmgmt-s-team'>
        <div className='projmgmt-s-team__title'>
          <GroupsIcon sx={{fontSize: 25}} />
          <span>Team</span>
          <AddMembers
            team={team}
            setTeam={setTeam}
            pid={project.project_id}
          />
        </div>
        <Members
          team={team}
          setTeam={setTeam}
          project={project}
          setProject={setProject}
        />
      </div>
    </>
  );
}

export default Team;
