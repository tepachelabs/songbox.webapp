import React from 'react';
import propTypes from 'prop-types';

import {
  Repeat, Rewind, Play, Forward, Shuffle,
} from '../PlayerButtons';

const PlayerComponent = ({ isDisabled }) => (
  <div className={`buttons ${isDisabled ? 'disable-buttons' : ''}`}>
    <div className="buttons-container">
      <Repeat />
      <Rewind />
      <Play />
      <Forward />
      <Shuffle />
    </div>
  </div>
);

PlayerComponent.propTypes = {
  isDisabled: propTypes.bool.isRequired,
};

export default PlayerComponent;
