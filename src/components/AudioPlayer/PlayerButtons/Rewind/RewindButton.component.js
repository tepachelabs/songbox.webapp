import React from 'react';
import propTypes from 'prop-types';

import rewindIcon from '../../icons/rewind.svg';

const Previous = ({ isDisabled, previousSong }) => (
  <button type="button" className={`player-button ${isDisabled ? 'disable-buttons' : ''}`} onClick={previousSong} disabled={isDisabled}>
    <img
      className="icon"
      src={rewindIcon}
      alt="rewind-icon"
    />
  </button>
);

Previous.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  previousSong: propTypes.func.isRequired,
};

export default Previous;
