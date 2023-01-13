import {
  describe, it, expect, jest, beforeEach, afterEach,
} from '@jest/globals';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncGetThreadDetail,
  asyncLikeThreadDetail,
  likeThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
} from './action';

/**
 * scenario test
 *
 * - asyncGetThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 *  * - asyncLikeThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
const fakeDetailThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg',
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
};

const fakeErrorResponse = new Error('Ups, something went wrong');
const fakeLikeThreadResponse = {
  id: 'vote-1',
  userId: 'users-1',
  threadId: 'thread-1',
  voteType: 1,
};
const mockReturnValue = {
  authUser: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
};

describe('asyncGetThreadDetail thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    // restore original implementation
    api.getThreadDetail = api._getThreadDetail;

    // delete backup
    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when like thread success', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeDetailThreadResponse);
    // mock dispatch
    const dispatch = jest.fn();
    const getState = jest.fn().mockReturnValue(mockReturnValue);
    // action
    await asyncGetThreadDetail()(dispatch, getState);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(
      fakeDetailThreadResponse,
      mockReturnValue.authUser.id,
    ));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when like thread failed', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    const getState = jest.fn().mockReturnValue(mockReturnValue);
    window.alert = jest.fn();
    // action
    await asyncGetThreadDetail()(dispatch, getState);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncLikeThreadDetail thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._likeThread = api.likeThread;
  });

  afterEach(() => {
    // restore original implementation
    api.likeThread = api._likeThread;

    // delete backup
    delete api._likeThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.likeThread = () => Promise.resolve(fakeLikeThreadResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // action
    await asyncLikeThreadDetail()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      likeThreadDetailActionCreator(
        fakeLikeThreadResponse,
      ),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.likeThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    window.alert = jest.fn();
    // action
    await asyncLikeThreadDetail()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
