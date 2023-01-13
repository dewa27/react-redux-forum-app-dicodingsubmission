/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Thread from '../components/Thread';

const stories = {
  title: 'Thread',
  component: Thread,
};
export default stories;
const threadData = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  user: {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  voteType: 0,
};

function TemplateThread(args) {
  return <Thread {...args} />;
}
const ExampleThread = TemplateThread.bind({});
ExampleThread.args = {
  thread: threadData,
  onLike: () => {},
  onDislike: () => {},
  onNeutralize: () => {},
};
export { ExampleThread };
