import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function Toast({
  title, body, isShown, type,
}) {
  return (
    <div className={`toast ${isShown ? 'show' : ''} ${type}`}>
      <div className="toast-icon">
        <FontAwesomeIcon icon={type === 'success' ? faCircleCheck : faCircleExclamation} />
      </div>
      <div>
        <p className="toast-title">{title}</p>
        <p className="toast-body">{body}</p>
      </div>
    </div>
  );
}
Toast.propTypes = {
  /** Title of the toast */
  title: PropTypes.string,
  /** Description or body of the toast */
  body: PropTypes.string,
  /** State of the toast, is it shown or not */
  isShown: PropTypes.bool,
  /** Toast type, success or error */
  type: PropTypes.oneOf(['success', 'error']),
};
Toast.defaultProps = {
  title: '',
  body: '',
  isShown: false,
  type: 'success',
};
export default Toast;
