import { describe, expect, it } from '@jest/globals';
import isPreloadReducer from './reducer';
/**
 * scenario test
 *
 * - isPreload reducer
 * - should return the initial state when given by unknown action
*  - should return the isPreload when given by SET_IS_PRELOAD action
 */

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the isPreload when given by SET_IS_PRELOAD action', () => {
    const initialState = [];
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: {
        isPreload: false,
      },
    };

    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.isPreload);
  });
});
