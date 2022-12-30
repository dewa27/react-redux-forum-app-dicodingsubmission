import React from 'react';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import timeSince from '../utils/helper';

function Thread({ thread }) {
  // const navigateToDetail = (e) => {
  //   console.log(e);
  // };
  return (
    <Link className="comment-wrapper" to="/3">
      <div className="comment card" id="comment-1">
        <div className="comment-content">
          <div>
            <div className="comment-heading">
              <img className="comment-profile" src="logo192.png" alt="" />
              <div className="comment-info">

                <p className="comment-author">{thread.ownerId}</p>
                <p className="m-0">
                  {`${timeSince(thread.createdAt)} ago`}
                </p>
              </div>
            </div>

            <div className="comment-body">
              <p>
                {thread.body}
              </p>
              <div className="button-group">
                <p className="comment-count">
                  <FontAwesomeIcon icon={faComment} />
                  {thread.totalComments}
                  {thread.totalComments > 1 ? ' comments' : ' comment'}
                </p>

              </div>
            </div>
          </div>
          <div className="comment-voting">
            <button className="comment-button" type="button">
              <FontAwesomeIcon icon={faThumbsUp} />
              <span className="sr-only">Vote up</span>
            </button>
            <p className="comment-vote-count">
              {thread.upVotesBy.length - thread.downVotesBy.length}
            </p>
            <button className="comment-button" type="button">
              <FontAwesomeIcon icon={faThumbsDown} />
              <span className="sr-only">Vote down</span>
            </button>
          </div>
        </div>
        {/* <div className="replies">
        <a href="#load-more">Load more replies</a>
      </div> */}
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
  }).isRequired,
};
export default Thread;
