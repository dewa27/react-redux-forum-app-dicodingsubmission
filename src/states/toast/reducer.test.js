import { describe, it, expect } from '@jest/globals';
import toastReducer from './reducer';

/**
 * scenario test
 *
 * - toastReducer reducer
 *  - should return the initial state when given by unknown action
 *  - should return the toast data when given by SHOW_TOAST action
 */

describe('toastReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = toastReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the toast when given by SHOW_TOAST action', () => {
    const initialState = [];
    const action = {
      type: 'SHOW_TOAST',
      payload: {
        toast: {
          title: 'Logout Success',
          body: 'You are logged out!',
          isShown: true,
          type: 'success',
        },
      },
    };

    const nextState = toastReducer(initialState, action);

    expect(nextState).toEqual(action.payload.toast);
  });
});
