import React from 'react';
import propTypes from 'prop-types';

const PlayerButton = ({
  handleOnClick, icon, isDisabled,
}) => {
  const className = isDisabled ? 'disable-buttons' : '';

  return (
    <button type="button" onClick={handleOnClick} className={`player-button ${className}`} disabled={isDisabled}>
      <img
        src={icon}
        alt="player-button-icon"
      />
    </button>
  );
};

PlayerButton.propTypes = {
  handleOnClick: propTypes.func.isRequired,
  icon: propTypes.node.isRequired,
  isDisabled: propTypes.bool.isRequired,
};

export default PlayerButton;
