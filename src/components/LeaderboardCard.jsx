import React from 'react';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function LeaderboardCard({ leaderboard, rankNumber }) {
  return (
    <div className="card">
      <div className="l-card-content">
        <div className="l-card-body">
          <img className="user-image img-small" src={leaderboard.user.avatar} alt="" />
          <div className="">
            <p className="podium-username">{leaderboard.user.name}</p>
            <p className="email">{leaderboard.user.email}</p>
          </div>
        </div>
        <div>
          <span className="podium-score">
            <span>
              {leaderboard.score}
            </span>
            pts
          </span>
          <span className="podium-label">
            <FontAwesomeIcon icon={faHashtag} />
            <p>{rankNumber}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
LeaderboardCard.propTypes = {
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
export default LeaderboardCard;
