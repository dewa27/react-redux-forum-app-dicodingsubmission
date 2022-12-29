import React from 'react';

function ThreadFormInput() {
  return (
    <div className="thread-input">
      <textarea type="text" placeholder="What are you thinking?" />
      <p className="thread-input__char-left">
        <strong>0</strong>
        /320
      </p>
      <button type="submit">Send</button>
    </div>
  );
}

export default ThreadFormInput;
