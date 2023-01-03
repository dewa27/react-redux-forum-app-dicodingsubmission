import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { showToast } from '../toast/action';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  LIKE_THREAD: 'LIKE_THREAD',
  DISLIKE_THREAD: 'DISLIKE_THREAD',
  NEUTRALIZE_THREAD: 'NEUTRALIZE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}
function likeThreadActionCreator(vote) {
  return {
    type: ActionType.LIKE_THREAD,
    payload: {
      vote,
    },
  };
}
function dislikeThreadActionCreator(vote) {
  return {
    type: ActionType.DISLIKE_THREAD,
    payload: {
      vote,
    },
  };
}
function neutralizeThreadActionCreator(vote) {
  return {
    type: ActionType.NEUTRALIZE_THREAD,
    payload: {
      vote,
    },
  };
}
function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(showToast({ title: 'Create Thread Success', body: 'Your thread has succesfully created', type: 'success' }));
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      dispatch(showToast({ title: 'Create Thread Failed', body: error.message, type: 'error' }));
    }
    dispatch(hideLoading());
  };
}

function asyncLikeThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.likeThread(threadId);
      dispatch(likeThreadActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDislikeThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.dislikeThread(threadId);
      dispatch(dislikeThreadActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.neutralizeThread(threadId);
      dispatch(neutralizeThreadActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  likeThreadActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncLikeThread,
  receiveThreadsActionCreator,
  asyncDislikeThread,
  asyncNeutralizeThread,
};
