import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CREATE_COMMENT: 'CREATE_COMMENT',
  LIKE_THREAD_DETAIL: 'LIKE_THREAD_DETAIL',
  DISLIKE_THREAD_DETAIL: 'DISLIKE_THREAD_DETAIL',
  NEUTRALIZE_THREAD_DETAIL: 'NEUTRALIZE_THREAD_DETAIL',
  LIKE_COMMENT: 'LIKE_COMMENT',
  DISLIKE_COMMENT: 'DISLIKE_COMMENT',
  NEUTRALIZE_COMMENT: 'NEUTRALIZE_COMMENT',
};
function receiveThreadDetailActionCreator(threadDetail, userId) {
  let voteType;
  if (threadDetail.upVotesBy.includes(userId)) {
    voteType = 1;
  } else if (threadDetail.downVotesBy.includes(userId)) {
    voteType = -1;
  } else {
    voteType = 0;
  }
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail: {
        ...threadDetail,
        voteType,
      },
    },
  };
}

function likeThreadDetailActionCreator(vote) {
  return {
    type: ActionType.LIKE_THREAD_DETAIL,
    payload: {
      vote,
    },
  };
}
function dislikeThreadDetailActionCreator(vote) {
  return {
    type: ActionType.DISLIKE_THREAD_DETAIL,
    payload: {
      vote,
    },
  };
}
function neutralizeThreadDetailActionCreator(vote) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_DETAIL,
    payload: {
      vote,
    },
  };
}
function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}
function likeCommentActionCreator(vote) {
  return {
    type: ActionType.LIKE_COMMENT,
    payload: {
      vote,
    },
  };
}
function dislikeCommentActionCreator(vote) {
  return {
    type: ActionType.DISLIKE_COMMENT,
    payload: {
      vote,
    },
  };
}
function neutralizeCommentActionCreator(vote) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT,
    payload: {
      vote,
    },
  };
}
function asyncGetThreadDetail(id) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading);
    try {
      const threadDetail = await api.getThreadDetail(id);
      dispatch(receiveThreadDetailActionCreator(threadDetail, authUser.id));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading);
  };
}

function asyncLikeThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.likeThread(threadId);
      dispatch(likeThreadDetailActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDislikeThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.dislikeThread(threadId);
      dispatch(dislikeThreadDetailActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const vote = await api.neutralizeThread(threadId);
      dispatch(neutralizeThreadDetailActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading);
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading);
  };
}

function asyncLikeComment(commentId) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    dispatch(showLoading());
    try {
      const vote = await api.likeComment(threadDetail.id, commentId);
      dispatch(likeCommentActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncDislikeComment(commentId) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    dispatch(showLoading());
    try {
      const vote = await api.dislikeComment(threadDetail.id, commentId);
      dispatch(dislikeCommentActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncNeutralizeComment(commentId) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    dispatch(showLoading());
    try {
      const vote = await api.neutralizeComment(threadDetail.id, commentId);
      dispatch(neutralizeCommentActionCreator(vote));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncGetThreadDetail,
  receiveThreadDetailActionCreator,
  asyncCreateComment,
  asyncDislikeThreadDetail,
  asyncLikeThreadDetail,
  asyncNeutralizeThreadDetail,
  asyncLikeComment,
  asyncNeutralizeComment,
  asyncDislikeComment,
};
