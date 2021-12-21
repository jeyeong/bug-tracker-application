import React from 'react';
import loadingImg from '../../assets/img/loading.svg'

import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className='spinner'>
      <img src={loadingImg} alt='Loading...' />
    </div>
  );
}

export default LoadingScreen;
