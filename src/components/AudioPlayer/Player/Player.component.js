import React from 'react';
import propTypes from 'prop-types';

import {
  Repeat,
  RewindButton,
  PlayContainer,
  ForwardButton,
  Shuffle,
} from '../PlayerButtons';

const PlayerComponent = ({ isDisabled, audioRef }) => (
  <div className={`buttons ${isDisabled ? 'disable-buttons' : ''}`}>
    <div className="buttons-container">
      <Repeat />
      <RewindButton />
      <PlayContainer audioRef={audioRef} />
      <ForwardButton />
      <Shuffle />
    </div>
  </div>
);

PlayerComponent.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  audioRef: propTypes.shape({ current: propTypes.instanceOf(Node) }).isRequired,
};

export default PlayerComponent;
