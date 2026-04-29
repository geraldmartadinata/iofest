import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import AuthPage from './pages/AuthPage';
import RedeemPage from './pages/RedeemPage';
import MitraDashboard from './pages/MitraDashboard';
import MyVouchersPage from './pages/MyVouchersPage';
import MainLayout from './components/MainLayout';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  // Pages that don't need the MainLayout (e.g., AuthPage)
  if (currentPage === 'auth') {
    return <AuthPage onNavigate={setCurrentPage} />;
  }

  // Pages that might not need the full navbar or want their own layout
  if (currentPage === 'landing') {
    return <LandingPage onNavigate={setCurrentPage} />;
  }

  return (
    <MainLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'dashboard' && <UserDashboard onNavigate={setCurrentPage} />}
      {currentPage === 'redeem' && <RedeemPage />}
      {currentPage === 'my-vouchers' && <MyVouchersPage />}
      {currentPage === 'mitra' && <MitraDashboard />}
    </MainLayout>
  );
}

export default App;
