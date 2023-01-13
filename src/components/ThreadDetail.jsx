import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';

function ThreadDetail({
  threadDetail, onLike, onDislike, onNeutralize,
}) {
  const onLikeHandler = () => {
    if (threadDetail.voteType !== 1) {
      onLike(threadDetail.id);
    } else {
      onNeutralize(threadDetail.id);
    }
  };
  const onDislikeHandler = () => {
    if (threadDetail.voteType !== -1) {
      onDislike(threadDetail.id);
    } else {
      onNeutralize(threadDetail.id);
    }
  };
  return (
    <div className="detail-thread">
      <div className="detail-thread__header">
        <p className="thread-category">
          #
          {threadDetail.category}
        </p>
        <h1>{threadDetail.title}</h1>
      </div>
      <div className="detail-thread__body">
        <p>
          {threadDetail.body}
        </p>
      </div>
      <div className="button-group detail-thread__button-group">
        <span className="thread-icon-detail">
          <ActionButton
            onClick={onLikeHandler}
            icon="thumbs-up"
            additionalClass={threadDetail.voteType === 1 ? 'active' : ''}
          />
          {threadDetail.upVotesBy ? threadDetail.upVotesBy.length : ''}
        </span>
        <span className="thread-icon-detail">
          <ActionButton
            onClick={onDislikeHandler}
            icon="thumbs-down"
            additionalClass={threadDetail.voteType === -1 ? 'active' : ''}
          />
          {threadDetail.downVotesBy ? threadDetail.downVotesBy.length : ''}
        </span>

      </div>
    </div>
  );
}
ThreadDetail.propTypes = {
  threadDetail: PropTypes.shape({
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    voteType: PropTypes.number.isRequired,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  onNeutralize: PropTypes.func.isRequired,
};
export default ThreadDetail;
