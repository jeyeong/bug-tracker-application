import React from 'react';

const MemberChip = ({ type }) => {
  const deleteMember = () => {
    console.log('delete');
  }

  return (
    <div className='projmgmt-s-team__chip' id={`chip__${type ?? 'submitter'}`}>
      <span
        className='projmgmt-s-team__delete-member'
        onClick={deleteMember}
      >
        x
      </span>
      Je Yeong Soh
    </div>
  );
}

export default MemberChip;
