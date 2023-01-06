import { ActionType } from './action';

function threadDetailReducer(threadDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return { ...action.payload.threadDetail };
    case ActionType.CREATE_COMMENT:
      return { ...threadDetail, comments: [...threadDetail.comments, action.payload.comment] };
    case ActionType.LIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        voteType: action.payload.vote.voteType,
        upVotesBy: [...threadDetail.upVotesBy, action.payload.vote.userId],
        downVotesBy: [...threadDetail.downVotesBy].filter(
          (userId) => userId !== action.payload.vote.userId,
        ),
      };
    case ActionType.DISLIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        voteType: action.payload.vote.voteType,
        downVotesBy: [...threadDetail.downVotesBy, action.payload.vote.userId],
        upVotesBy: [...threadDetail.upVotesBy].filter(
          (userId) => userId !== action.payload.vote.userId,
        ),
      };
    case ActionType.NEUTRALIZE_THREAD_DETAIL:
      return {
        ...threadDetail,
        voteType: action.payload.vote.voteType,
        upVotesBy: [...threadDetail.upVotesBy].filter(
          (userId) => userId !== action.payload.vote.userId,
        ),
        downVotesBy: [...threadDetail.downVotesBy].filter(
          (userId) => userId !== action.payload.vote.userId,
        ),
      };
    case ActionType.LIKE_COMMENT:
      return {
        ...threadDetail,
        comments: [...threadDetail.comments].map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: [...comment.upVotesBy, action.payload.vote.userId],
              downVotesBy: [...comment.downVotesBy].filter(
                (userId) => userId !== action.payload.vote.userId,
              ),
            };
          }
          return comment;
        }),
      };
    case ActionType.DISLIKE_COMMENT:
      return {
        ...threadDetail,
        comments: [...threadDetail.comments].map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              downVotesBy: [...comment.downVotesBy, action.payload.vote.userId],
              upVotesBy: [...comment.upVotesBy].filter(
                (userId) => userId !== action.payload.vote.userId,
              ),
            };
          }
          return comment;
        }),
      };
    case ActionType.NEUTRALIZE_COMMENT:
      return {
        ...threadDetail,
        comments: [...threadDetail.comments].map((comment) => {
          if (comment.id === action.payload.vote.commentId) {
            return {
              ...comment,
              upVotesBy: [...comment.upVotesBy].filter(
                (userId) => userId !== action.payload.vote.userId,
              ),
              downVotesBy: [...comment.downVotesBy].filter(
                (userId) => userId !== action.payload.vote.userId,
              ),
            };
          }
          return comment;
        }),
      };
    default:
      return threadDetail;
  }
}
export default threadDetailReducer;
