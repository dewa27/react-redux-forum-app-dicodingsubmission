/* eslint-disable no-console */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import timeSince from '../utils/helper';
import ActionButton from './ActionButton';

function Thread({
  thread, onLike, onDislike, onNeutralize,
}) {
  const onLikeHandler = (e) => {
    e.preventDefault();
    if (thread.voteType !== 1) {
      onLike(thread.id);
    } else {
      onNeutralize(thread.id);
    }
  };
  const onDislikeHandler = (e) => {
    e.preventDefault();
    if (thread.voteType !== -1) {
      onDislike(thread.id);
    } else {
      onNeutralize(thread.id);
    }
  };
  return (
    <Link className="thread-wrapper" to={`/thread/${thread.id}`}>
      <div className="thread card" id="thread-1">

        <div className="thread-heading">
          <img className="thread-profile" src={thread.user.avatar} alt="" />
          <div className="thread-info">

            <p className="thread-author">{thread.user.name}</p>
            <p className="m-0">
              {`${timeSince(thread.createdAt)} ago`}
            </p>
          </div>
        </div>

        <div className="thread-body">
          <p className="thread-category">
            #
            {thread.category}
          </p>
          <p className="title">{thread.title}</p>

          <p>
            {thread.body}
          </p>
          <div className="button-group">
            <span className="thread-icon-detail">
              <ActionButton onClick={onLikeHandler} icon="thumbs-up" additionalClass={thread.voteType === 1 ? 'active' : ''} />
              {thread.upVotesBy.length}
            </span>
            <span className="thread-icon-detail">
              <ActionButton onClick={onDislikeHandler} icon="thumbs-down" additionalClass={thread.voteType === -1 ? 'active' : ''} />
              {thread.downVotesBy.length}
            </span>
            <span className="thread-icon-detail comment-count">
              <FontAwesomeIcon icon="comment" />
              {thread.totalComments}
              {thread.totalComments > 1 ? ' comments' : ' comment'}
            </span>

          </div>
        </div>

      </div>
    </Link>
  );
}
Thread.propTypes = {
  thread: PropTypes.shape({
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
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onNeutralize: PropTypes.func.isRequired,
};
export default Thread;
