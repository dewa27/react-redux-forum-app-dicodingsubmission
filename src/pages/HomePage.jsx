/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncAddThread, asyncLikeThread, asyncDislikeThread, asyncNeutralizeThread,
} from '../states/threads/action';
import asyncGetThreadsandUsers from '../states/shared/action';
import Thread from '../components/Thread';
import ThreadFormInput from '../components/ThreadFormInput';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetThreadsandUsers());
  }, [dispatch]);
  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const onLikeThread = (threadId) => {
    dispatch(asyncLikeThread(threadId));
  };

  const onDislikeThread = (threadId) => {
    dispatch(asyncDislikeThread(threadId));
  };

  const onNeutralizeThread = (threadId) => {
    dispatch(asyncNeutralizeThread(threadId));
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
        {threadList.map((thread) => (
          <Thread
            key={thread.id}
            thread={thread}
            onLike={onLikeThread}
            onDislike={onDislikeThread}
            onNeutralize={onNeutralizeThread}
          />
        )) }
      </div>
    </>
  );
}

export default HomePage;
