import {
  afterEach, beforeEach, it, describe, expect,
  jest,
} from '@jest/globals';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../user/action';
import asyncGetThreadsAndUsers from './action';
/**
 * scenario test
 *
 * - asyncGetThreadsAndUsers thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
const fakeThreadsResponse = [
  {
    id: 'thread-UdXXx3hSIp9aNdAw',
    title: 'xxx',
    body: 'xx',
    category: 'tech',
    createdAt: '2023-01-10T11:14:22.396Z',
    ownerId: 'user-v70dJYGqkZohUH3r',
    totalComments: 1,
    upVotesBy: [],
    downVotesBy: [],
  }, {
    id: 'thread-08_nUU2fhu1P5nre',
    title: 'Pengalaman Belajar React di Dicoding',
    body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
    category: 'react',
    createdAt: '2022-11-13T09:59:31.019Z',
    ownerId: 'user-5PqX6Ldhnk_ifroq',
    totalComments: 1,
    upVotesBy: ['user-6oWew2w2Wx5xLUTU', 'user-5PqX6Ldhnk_ifroq'],
    downVotesBy: [],
  }, {
    id: 'thread-B3N9KGa87vfMHyBQ',
    title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
    body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
    category: 'introduction',
    createdAt: '2022-11-13T09:55:55.353Z',
    ownerId: 'user-6oWew2w2Wx5xLUTU',
    totalComments: 3,
    upVotesBy: ['user-5PqX6Ldhnk_ifroq', 'user-6oWew2w2Wx5xLUTU'],
    downVotesBy: [],
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  {
    id: 'jane_doe',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetThreadsAndUsers thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api._getAllUsers;
    delete api._getAllTalks;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncGetThreadsAndUsers()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllTalks = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    window.alert = jest.fn();
    // action
    await asyncGetThreadsAndUsers()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
