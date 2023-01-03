import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.LIKE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            voteType: action.payload.vote.voteType,
            upVotesBy: [...thread.upVotesBy, action.payload.vote.userId],
            downVotesBy: [...thread.downVotesBy].filter(
              (userId) => userId !== action.payload.vote.userId,
            ),
          };
        }
        return thread;
      });
    case ActionType.DISLIKE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            voteType: action.payload.vote.voteType,
            downVotesBy: [...thread.downVotesBy, action.payload.vote.userId],
            upVotesBy: [...thread.upVotesBy].filter(
              (userId) => userId !== action.payload.vote.userId,
            ),
          };
        }
        return thread;
      });
    case ActionType.NEUTRALIZE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.vote.threadId) {
          return {
            ...thread,
            voteType: action.payload.vote.voteType,
            upVotesBy: [...thread.upVotesBy].filter(
              (userId) => userId !== action.payload.vote.userId,
            ),
            downVotesBy: [...thread.downVotesBy].filter(
              (userId) => userId !== action.payload.vote.userId,
            ),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}
export default threadsReducer;
