import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRankingStar } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        <span>Home</span>
      </Link>
      <Link to="/leaderboards">
        <FontAwesomeIcon icon={faRankingStar} />
        <span>Leaderboards</span>
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} />
        <span>Account</span>
      </Link>
    </nav>
  );
}

export default Navigation;
