/* eslint-disable no-console */
import React, { useEffect } from 'react';
import './styles/styles.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import Loading from './components/Loading';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Toast from './components/Toast';

function App() {
  const {
    authUser = null,
    isPreload = false,
    toast = {},
  // eslint-disable-next-line no-console
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  // const [toastTitle, setToastTitle] = useState('Sukses!');
  // const [toastBody, setToastBody] = useState('Berhasil membuat akun!');
  // const [toastIsShown, setToastIsShown] = useState(false);

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onClickLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };
  if (isPreload) {
    return null;
  }
  if (authUser == null) {
    return (
      <>
        <Toast title={toast.title} body={toast.body} isShown={toast.isShown} type={toast.type} />
        <header className="app-header" />
        <main className="app-main app-main-login">
          <Routes>
            <Route path="/*" element={<LoginRegisterPage />} />
          </Routes>
        </main>
        <footer className="app-footer-login">
          <p>Powered by Dicoding Forum API</p>
        </footer>
      </>
    );
  }
  return (
    <>
      <Loading />
      <Toast title={toast.title} body={toast.body} isShown={toast.isShown} type={toast.type} />
      <header className="app-header">
        <button type="button" onClick={onClickLogout}>
          <FontAwesomeIcon icon={faPowerOff} />
          <span>Log out</span>
        </button>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/thread/:id" element={<DetailPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <Navigation />
      </footer>
    </>
  );
}

export default App;
