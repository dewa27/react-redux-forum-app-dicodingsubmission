import React from 'react';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function LeaderboardPodium({ leaderboard, rankNumber }) {
  return (
    <div className="card podium">
      <span className="podium-label-wrapper">
        <span className="podium-label">
          <FontAwesomeIcon icon={faHashtag} />
          <p>{rankNumber}</p>
        </span>
      </span>
      <div className="podium-body">
        <img className="user-image" src={leaderboard.user.avatar} alt="" />
        <p className="podium-username">{leaderboard.user.name}</p>
        <p className="email">{leaderboard.user.email}</p>
        <span className="podium-score">
          <span>
            {leaderboard.score}
          </span>
          pts
        </span>
      </div>
    </div>
  );
}
LeaderboardPodium.propTypes = {
  leaderboard: PropTypes.shape({
    score: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  rankNumber: PropTypes.number.isRequired,
};
export default LeaderboardPodium;
