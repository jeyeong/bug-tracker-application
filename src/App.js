import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Views
import {
  LoginPage,
  Dashboard,
  Loading
} from './views';

function App() {
  const { user, isLoading, logout } = useAuth0()

  if (isLoading) {
    return <Loading />;
  }

  if (user === undefined) {
    return <LoginPage />;
  }

  return (
    <div className="app">
      <h1>Bug Tracker</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>

      <button
        onClick={() =>
          logout()
        }
      >
        Log Out
      </button>

      <hr/>

      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
