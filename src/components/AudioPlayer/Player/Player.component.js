import React from 'react';
import propTypes from 'prop-types';

import {
  RepeatButton,
  RewindButton,
  PlayContainer,
  ForwardButton,
  ShuffleButton,
} from '../PlayerButtons';

const PlayerComponent = ({
  isDisabled,
  audioRef,
  toggleIsRandom,
}) => (
  <div className={`buttons ${isDisabled ? 'disable-buttons' : ''}`}>
    <div className="buttons-container">
      <RepeatButton />
      <RewindButton />
      <PlayContainer audioRef={audioRef} />
      <ForwardButton />
      <ShuffleButton onClick={toggleIsRandom} />
    </div>
  </div>
);

PlayerComponent.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  audioRef: propTypes.shape({ current: propTypes.instanceOf(Node) }).isRequired,
  toggleIsRandom: propTypes.func.isRequired,
};

export default PlayerComponent;
