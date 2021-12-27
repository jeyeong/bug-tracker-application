import React from 'react';
import MemberChip from './MemberChip';

const Members = () => {
  return (
    <div className='projmgmt-s-team__members'>
      <div>
        <span className='projmgmt-s-team__role-title'>Project Managers</span>
        <div className='projmgmt-s-team__role-chips'>
          <MemberChip type='project-manager' />
        </div>
      </div>

      <div>
        <span className='projmgmt-s-team__role-title'>Developers</span>
        <div className='projmgmt-s-team__role-chips'>
          <MemberChip type='developer' />
        </div>
      </div>

      <div>
        <span className='projmgmt-s-team__role-title'>Submitters</span>
        <div className='projmgmt-s-team__role-chips'>
          <MemberChip type='submitter' />
        </div>
      </div>
    </div>
  );
}

export default Members;
