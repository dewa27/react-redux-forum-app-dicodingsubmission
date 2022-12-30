import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LeaderboardPodium from '../components/LeaderboardPodium';
import LeaderboardCard from '../components/LeaderboardCard';
import { asyncGetLeaderboards } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const {
    leaderboards = [],
  // eslint-disable-next-line no-console
  } = useSelector((states) => states);
  const [topThreeLeaderboards, setTopThreeLeaderboards] = useState([]);
  const [restLeaderboards, setRestLeaderboards] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetLeaderboards());
    // eslint-disable-next-line no-console
    setTopThreeLeaderboards(() => [...leaderboards.slice(0, 3)]);
    setRestLeaderboards(() => [...leaderboards.slice(3)]);
  }, [dispatch]);

  return (
    <>
      <div className="podium-wrapper">
        {topThreeLeaderboards.map((leaderboard, index) => (
          <LeaderboardPodium
            key={leaderboard.user.id}
            leaderboard={leaderboard}
            rankNumber={index + 1}
          />
        ))}
      </div>
      <div className="l-card-wrapper">
        {restLeaderboards.map((leaderboard, index) => (
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
