/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Thread from './Thread';
import { asyncLikeThread, asyncDislikeThread, asyncNeutralizeThread } from '../states/threads/action';
import ThreadSearchInput from './ThreadSearchInput';

function ThreadList({ threads }) {
  const [threadList, setThreadList] = useState(threads);
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setThreadList(() => [...threads].filter(
      (thread) => thread.category.toLowerCase().includes(keyword.toLowerCase()),
    ));
  }, [threads]);

  const onSearchThread = (searchQuery) => {
    setKeyword(() => searchQuery);
    setThreadList(() => [...threads].filter(
      (thread) => thread.category.toLowerCase().includes(searchQuery.toLowerCase()),
    ));
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
  return (
    <>
      <ThreadSearchInput onSearch={onSearchThread} />
      {threadList.map((thread) => (
        <Thread
          key={thread.id}
          thread={thread}
          onLike={onLikeThread}
          onDislike={onDislikeThread}
          onNeutralize={onNeutralizeThread}
        />
      )) }
    </>
  );
}
ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    id: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    totalComments: PropTypes.number.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    voteType: PropTypes.number.isRequired,
  })).isRequired,
};
export default ThreadList;
