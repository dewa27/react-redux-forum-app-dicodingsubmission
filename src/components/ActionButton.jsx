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
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  additionalClass: PropTypes.string.isRequired,
};
export default ActionButton;
