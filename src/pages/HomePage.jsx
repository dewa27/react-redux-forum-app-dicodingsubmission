import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncAddThread, asyncGetThreads } from '../states/threads/action';
import Thread from '../components/Thread';
import ThreadFormInput from '../components/ThreadFormInput';

function HomePage() {
  const {
    threads = [],
    // authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };
  return (
    <>
      <ThreadFormInput addThread={onAddThread} />
      <div>
        {threads.map((thread) => <Thread thread={thread} />)}
      </div>
    </>
  );
}

export default HomePage;
