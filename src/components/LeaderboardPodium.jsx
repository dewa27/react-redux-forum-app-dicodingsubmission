import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';

function LeaderboardPodium() {
  return (
    <div className="card podium">
      <div className="podium-body">
        <img src="logo192.png" alt="" />
        <p className="podium-username">Dewa Krishna</p>
        <p className="email">dewakrishna@gmail.com</p>
        <span>
          <FontAwesomeIcon icon={faStar} />
          4
        </span>
      </div>
    </div>
  );
}
// LeaderboardPodium.propTypes = {
//   rank: PropTypes.shape({
//     score: PropTypes.number.isRequired,
//     user: PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
export default LeaderboardPodium;
