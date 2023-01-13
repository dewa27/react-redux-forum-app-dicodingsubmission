import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function ActionButton({ onClick, icon, additionalClass = '' }) {
  return (
    <button type="button" className={`action-button ${additionalClass}`} onClick={onClick}>
      {' '}
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
ActionButton.propTypes = {
  /** Function callback when onClick the ActionButton */
  onClick: PropTypes.func.isRequired,
  /** Icon of the ActionButton */
  icon: PropTypes.oneOf(['thumbs-up', 'thumbs-down']).isRequired,
  /** Additional class for styling the ActionButton */
  additionalClass: PropTypes.oneOfType([
    PropTypes.oneOf(['active']),
    PropTypes.string,
  ]).isRequired,
};
export default ActionButton;
