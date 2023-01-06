/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  const [navigationPosition, setNavigationPosition] = useState(window.location.pathname);
  const location = useLocation();
  useEffect(() => {
    setNavigationPosition(() => location.pathname);
  }, [location]);
  return (
    <nav>
      <Link to="/" className={navigationPosition === '/' ? 'active' : ''}>
        <FontAwesomeIcon icon="message" />
        <span>Threads</span>
      </Link>
      <Link to="/leaderboards" className={navigationPosition === '/leaderboards' ? 'active' : ''}>
        <FontAwesomeIcon icon="ranking-star" />
        <span>Leaderboards</span>
      </Link>
      <Link to="/profile" className={navigationPosition === '/profile' ? 'active' : ''}>
        <FontAwesomeIcon icon="user" />
        <span>Account</span>
      </Link>
    </nav>
  );
}

export default Navigation;
// Navigation.propTypes = {
//   navigation: PropTypes.string.isRequired,
// };
