import React from 'react';

const MemberChip = ({ type }) => {
  return (
    <div className='projmgmt-s-team__chip' id={`chip__${type ?? 'submitter'}`}>
      Je Yeong Soh
    </div>
  );
}

export default MemberChip;
