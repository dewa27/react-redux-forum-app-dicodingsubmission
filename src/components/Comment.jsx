import React from 'react';
import PropTypes from 'prop-types';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import timeSince from '../utils/helper';
import ActionButton from './ActionButton';

function Comment({
  comment, onLike, onDislike, onNeutralize, authUser,
}) {
  const onLikeHandler = (e) => {
    e.preventDefault();
    if (comment.upVotesBy.includes(authUser.id)) {
      onNeutralize(comment.id);
    } else {
      onLike(comment.id);
    }
  };
  const onDislikeHandler = (e) => {
    e.preventDefault();
    if (comment.downVotesBy.includes(authUser.id)) {
      onNeutralize(comment.id);
    } else {
      onDislike(comment.id);
    }
  };
  return (
    <div className="thread card" id="thread-1">

      <div className="thread-heading">
        <img className="thread-profile" src={comment.owner.avatar} alt="" />
        <div className="thread-info">

          <p className="thread-author">{comment.owner.name}</p>
          <p className="m-0">
            {`${timeSince(comment.createdAt)} ago`}
          </p>
        </div>
      </div>

      <div className="thread-body">
        <p className="title">{comment.title}</p>

        <p>
          {comment.content}
        </p>
        <div className="button-group">
          <span className="thread-icon-detail">
            <ActionButton onClick={onLikeHandler} icon={faThumbsUp} additionalClass={comment.upVotesBy.includes(authUser.id) ? 'active' : ''} />
            {comment.upVotesBy.length}
          </span>
          <span className="comment-icon-detail">
            <ActionButton onClick={onDislikeHandler} icon={faThumbsDown} additionalClass={comment.downVotesBy.includes(authUser.id) ? 'active' : ''} />
            {comment.downVotesBy.length}
          </span>
        </div>
      </div>

    </div>
  );
}
Comment.propTypes = PropTypes.shape({
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;
export default Comment;
