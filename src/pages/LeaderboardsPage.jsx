/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LeaderboardPodium from '../components/LeaderboardPodium';
import LeaderboardCard from '../components/LeaderboardCard';
import { asyncGetLeaderboards } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const {
    leaderboards,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  return (
    <>
      <h2 className="section-title">Leaderboards</h2>
      <div className="podium-wrapper">
        {leaderboards.slice(0, 3).map((leaderboard, index) => (
          <LeaderboardPodium
            key={leaderboard.user.id}
            leaderboard={leaderboard}
            rankNumber={index + 1}
          />
        ))}
      </div>
      <div className="l-card-wrapper">
        {leaderboards.slice(3).map((leaderboard, index) => (
          <LeaderboardCard
            key={leaderboard.user.id}
            leaderboard={leaderboard}
            rankNumber={index + 4}
          />
        ))}
      </div>
    </>
  );
}

export default LeaderboardsPage;
