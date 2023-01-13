import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncAddThread,
} from '../states/threads/action';
import asyncGetThreadsAndUsers from '../states/shared/action';
import ThreadFormInput from '../components/ThreadFormInput';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetThreadsAndUsers());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => {
    let voteType;
    if (thread.upVotesBy.includes(authUser.id)) {
      voteType = 1;
    } else if (thread.downVotesBy.includes(authUser.id)) {
      voteType = -1;
    } else {
      voteType = 0;
    }
    return {
      ...thread,
      user: users.find((user) => user.id === thread.ownerId),
      voteType: thread.voteType ? thread.voteType : voteType,
    };
  });
  return (
    <>
      <h2 className="section-title">Create Your Thread</h2>
      <ThreadFormInput addThread={onAddThread} />
      <div>
        <h2 className="section-title">Threads</h2>
        <ThreadList threads={threadList} />
      </div>
    </>
  );
}

export default HomePage;
