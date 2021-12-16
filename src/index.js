import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWrapper from './utils/auth/Auth0ProviderWrapper';

import './assets/css/index.css';

ReactDOM.render(
  <Router>
    <Auth0ProviderWrapper>
      <App />
    </Auth0ProviderWrapper>
  </Router>,
  document.getElementById('root')
);
