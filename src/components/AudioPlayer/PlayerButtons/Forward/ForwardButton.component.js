import React from 'react';
import propTypes from 'prop-types';

import fastForwardIcon from '../../icons/fast-forward.svg';

const ForwardButtonComponent = ({ isDisabled, playNextSong }) => (
  <button type="button" className={`player-button ${isDisabled ? 'disable-buttons' : ''}`} onClick={playNextSong} disabled={isDisabled}>
    <img
      className="icon"
      src={fastForwardIcon}
      alt="fast-forward-icon"
    />
  </button>
);

ForwardButtonComponent.propTypes = {
  playNextSong: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired,
};

export default ForwardButtonComponent;
