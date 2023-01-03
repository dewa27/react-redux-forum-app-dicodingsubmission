import React from 'react';
import PropTypes from 'prop-types';

function TextareaInput({ placeholder, onBodyChangeHandler, body }) {
  return (
    <>
      <textarea type="text" placeholder={placeholder} onChange={onBodyChangeHandler} maxLength="320" value={body} />
      <p className="thread-input__char-right">
        <strong>{body.length}</strong>
        /320
      </p>
    </>
  );
}
TextareaInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onBodyChangeHandler: PropTypes.func.isRequired,
};
export default TextareaInput;
