import React from 'react';
import MemberChip from './MemberChip';

// Helper function that groups the team member array by role
const groupByRole = team => {
  const rv = {
    'Admin': [],
    'Project Manager': [],
    'Developer': [],
    'Submitter': [],
  };

  team.forEach(mem => {
    if (mem.role) {
      rv[mem.role].push(mem);
    }
  });

  return rv;
};

const Members = ({ team, setTeam, project, setProject, setSnackbarMessage }) => {
  const groupedMembers = groupByRole(team);

  return (
    <>
    <div className='projmgmt-s-team__members'>
      <div>
        <span className='projmgmt-s-team__role-title'>Project Managers</span>
        <div className='projmgmt-s-team__role-chips'>
          {groupedMembers['Admin'].map(m => (
            <MemberChip
              type='project-manager'
              name={`${m.first_name} ${m.last_name}`}
              id={m.user_id}
              team={team}
              setTeam={setTeam}
              project={project}
              setProject={setProject}
              setSnackbarMessage={setSnackbarMessage}
              key={m.user_id}
            />
          ))}
          {groupedMembers['Project Manager'].map(m => (
            <MemberChip
              type='project-manager'
              name={`${m.first_name} ${m.last_name}`}
              id={m.user_id}
              team={team}
              setTeam={setTeam}
              project={project}
              setProject={setProject}
              setSnackbarMessage={setSnackbarMessage}
              key={m.user_id}
            />
          ))}
        </div>
      </div>

      <div>
        <span className='projmgmt-s-team__role-title'>Developers</span>
        <div className='projmgmt-s-team__role-chips'>
          {groupedMembers['Developer'].map(m => (
            <MemberChip
              type='developer'
              name={`${m.first_name} ${m.last_name}`}
              id={m.user_id}
              team={team}
              setTeam={setTeam}
              project={project}
              setProject={setProject}
              setSnackbarMessage={setSnackbarMessage}
              key={m.user_id}
            />
          ))}
        </div>
      </div>

      <div>
        <span className='projmgmt-s-team__role-title'>Submitters</span>
        <div className='projmgmt-s-team__role-chips'>
          {groupedMembers['Submitter'].map(m => (
            <MemberChip
              type='submitter'
              name={`${m.first_name} ${m.last_name}`}
              id={m.user_id}
              team={team}
              setTeam={setTeam}
              project={project}
              setProject={setProject}
              setSnackbarMessage={setSnackbarMessage}
              key={m.user_id}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Members;
