import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <>
      {currentPage === 'landing' && <LandingPage onNavigate={setCurrentPage} />}
      {currentPage === 'dashboard' && <UserDashboard onNavigate={setCurrentPage} />}
    </>
  );
}

export default App;
