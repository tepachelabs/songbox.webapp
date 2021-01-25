import React from 'react';
import propTypes from 'prop-types';

import {
  RepeatButton,
  RewindButton,
  PlayButton,
  ForwardButton,
  ShuffleButton,
} from '../PlayerButtons';

const PlayerComponent = ({
  isDisabled,
  toggleRandom,
  toggleRepeat,
  fastForward,
  rewind,
  play,
}) => (
  <div className={`buttons ${isDisabled ? 'disable-buttons' : ''}`}>
    <div className="buttons-container">
      <RepeatButton onClick={toggleRepeat} />
      <RewindButton onClick={rewind} />
      <PlayButton onClick={play} />
      <ForwardButton onClick={fastForward} />
      <ShuffleButton onClick={toggleRandom} />
    </div>
  </div>
);

PlayerComponent.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  toggleRandom: propTypes.func.isRequired,
  toggleRepeat: propTypes.func.isRequired,
  fastForward: propTypes.func.isRequired,
  rewind: propTypes.func.isRequired,
  play: propTypes.func.isRequired,
};

export default PlayerComponent;
