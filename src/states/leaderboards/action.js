import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { showToast } from '../toast/action';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncGetLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      dispatch(showToast({ title: 'Load Leaderboards Failed', body: error.message, type: 'error' }));
    }
    dispatch(hideLoading());
  };
}
export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncGetLeaderboards,
};
