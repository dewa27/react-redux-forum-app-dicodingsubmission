import {
  afterEach, beforeEach, it, describe, expect,
  jest,
} from '@jest/globals';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
/**
   * scenario test
   *
   * - asyncGetLeaderboards thunk
   *  - should dispatch action correctly when data fetching success
   *  - should dispatch action and call alert correctly when data fetching failed (no auth user)
*/
const fakeGetOwnProfileResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};
const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    // restore original implementation
    api.getOwnProfile = api._getOwnProfile;

    // delete backup
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success (no auth user)', async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeGetOwnProfileResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(
      fakeGetOwnProfileResponse,
    ));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
