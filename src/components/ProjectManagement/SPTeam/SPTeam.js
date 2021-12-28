import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import Members from './Members';

import './SPTeam.css';

const SPTeam = ({ team, setTeam, pid }) => {
  return (
    <>
      <div className='projmgmt-s-team'>
        <div className='projmgmt-s-team__title'>
          <GroupsIcon sx={{fontSize: 25}} />
          <span>Team</span>
        </div>
        <Members team={team} setTeam={setTeam} pid={pid} />
      </div>
    </>
  );
}

export default SPTeam;
