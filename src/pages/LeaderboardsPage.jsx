import React from 'react';
import LeaderboardPodium from '../components/LeaderboardPodium';

function LeaderboardsPage() {
  return (
    <div className="podium-wrapper">
      <LeaderboardPodium />
      <LeaderboardPodium />
      <LeaderboardPodium />
    </div>
  );
}

export default LeaderboardsPage;
