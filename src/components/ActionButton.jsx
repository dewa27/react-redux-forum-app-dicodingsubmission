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
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  additionalClass: PropTypes.string.isRequired,
};
export default ActionButton;
