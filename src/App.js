import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Views
import {
  LoadingScreen,
  LoginPage,
  Dashboard,
  Projects,
  Tickets,
} from './views';

function App() {
  const { user, isLoading } = useAuth0();

  console.log(user);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (user === undefined) {
    return <LoginPage />;
  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/tickets' element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
