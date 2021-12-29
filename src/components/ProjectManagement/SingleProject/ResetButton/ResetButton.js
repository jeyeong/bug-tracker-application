import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

import './ResetButton.css';

const ResetButton = ({ id, setProject, setTeam }) => {
  const handleReset = async () => {
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/projects/reset/${id}`);

    // Refetch data
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`)
      .then(res => {
        if (res?.data) {
          setProject(res.data);
        }
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/team`)
      .then(res => setTeam(res?.data));
  }

  return (
    <Button
      variant='contained'
      className='projmgmt-s__reset-btn'
      onClick={handleReset}
    >
      Reset
    </Button>
  );
}

export default ResetButton;