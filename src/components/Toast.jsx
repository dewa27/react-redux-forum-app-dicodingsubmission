/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function Toast({
  title, body, isShown, type,
}) {
  // const [isToastShown, setIsToastShown] = useState(isShown);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsToastShown(() => false);
  //   }, 2000);
  //   console.log('tes');
  // }, []);

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
  title: PropTypes.string,
  body: PropTypes.string,
  isShown: PropTypes.bool,
  type: PropTypes.string,
};
Toast.defaultProps = {
  title: '',
  body: '',
  isShown: false,
  type: 'success',
};
export default Toast;
