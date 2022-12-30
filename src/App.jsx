import React from 'react';
import './styles/styles.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import LoginRegisterPage from './pages/LoginRegisterPage';

function App() {
  const {
    authUser = {},
  // eslint-disable-next-line no-console
  } = useSelector((states) => states);

  if (authUser == null) {
    return (
      <>
        <header className="app-header" />
        <main className="app-main app-main-login">
          <Routes>
            <Route path="/*" element={<LoginRegisterPage />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Powered by Dicoding Forum API</p>
        </footer>
      </>
    );
  }
  return (
    <>
      <header className="app-header">
        <Navigation />
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <footer className="app-footer" />
    </>
  );
}

export default App;
