import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetThreads } from '../states/threads/action';
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
  return (
    <>
      <ThreadFormInput />
      <div>
        {threads.map((thread) => <Thread thread={thread} />)}
      </div>
    </>
  );
}

export default HomePage;
