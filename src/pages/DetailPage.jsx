import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncCreateComment, asyncDislikeThreadDetail, asyncGetThreadDetail,
  asyncLikeThreadDetail, asyncNeutralizeThreadDetail,
  asyncLikeComment, asyncDislikeComment, asyncNeutralizeComment,
} from '../states/threadDetail/action';
import TextareaInput from '../components/TextareaInput';
import useInputValue from '../hooks/useInputValue';
import Comment from '../components/Comment';
import ThreadDetail from '../components/ThreadDetail';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const [content, onContentChangeHandler] = useInputValue();

  useEffect(() => {
    dispatch(asyncGetThreadDetail(id));
  }, [id, dispatch]);

  const onSend = () => {
    dispatch(asyncCreateComment({ threadId: id, content }));
  };

  const onLikeHandler = (threadId) => {
    dispatch(asyncLikeThreadDetail(threadId));
  };
  const onDislikeHandler = (threadId) => {
    dispatch(asyncDislikeThreadDetail(threadId));
  };
  const onNeutralizeHandler = (threadId) => {
    dispatch(asyncNeutralizeThreadDetail(threadId));
  };

  const onLikeCommentHandler = (commentId) => {
    dispatch(asyncLikeComment(commentId));
  };
  const onDislikeCommentHandler = (commentId) => {
    dispatch(asyncDislikeComment(commentId));
  };
  const onNeutralizeCommentHandler = (commentId) => {
    dispatch(asyncNeutralizeComment(commentId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <div className="detail-thread-wrapper">
      <ThreadDetail
        onLike={onLikeHandler}
        onDislike={onDislikeHandler}
        onNeutralize={onNeutralizeHandler}
        threadDetail={threadDetail}
      />
      <div className="thread-input">
        <h2>Reply to this thread</h2>
        <TextareaInput body={content} onBodyChangeHandler={onContentChangeHandler} placeholder="Reply..." />
        <button type="submit" onClick={onSend}>Send</button>
      </div>
      <div className="comment" />
      <h2>
        Comments
        (
        {threadDetail.comments ? `${threadDetail.comments.length}` : ' ' }
        )
      </h2>
      <div>
        {threadDetail.comments ? threadDetail.comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            onLike={onLikeCommentHandler}
            onDislike={onDislikeCommentHandler}
            onNeutralize={onNeutralizeCommentHandler}
            authUser={authUser}
          />
        )) : ''}
      </div>
    </div>
  );
}

export default DetailPage;
