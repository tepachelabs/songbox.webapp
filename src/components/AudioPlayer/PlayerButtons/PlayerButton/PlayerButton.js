import React from 'react';
import propTypes from 'prop-types';

const PlayerButton = ({ classStatus, handleOnClick, icon, isDisabled }) => (
  <button onClick={handleOnClick} className={`player-button ${classStatus}`} disabled={isDisabled}>
    <img
      src={icon}
      alt="player-button-icon"
    />
  </button>
);

PlayerButton.propTypes = {
  classStatus: propTypes.string.isRequired,
  handleOnClick: propTypes.func.isRequired,
  icon: propTypes.node.isRequired,
  isDisabled: propTypes.bool.isRequired,
};

export default PlayerButton;
