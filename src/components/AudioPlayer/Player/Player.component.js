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
  onShuffleClick,
  onRepeatClick,
  onForwardClick,
  onRewindClick,
  onPlayClick,
}) => (
  <div className={`buttons ${isDisabled ? 'disable-buttons' : ''}`}>
    <div className="buttons-container">
      <RepeatButton onClick={onRepeatClick} />
      <RewindButton onClick={onRewindClick} />
      <PlayButton onClick={onPlayClick} />
      <ForwardButton onClick={onForwardClick} />
      <ShuffleButton onClick={onShuffleClick} />
    </div>
  </div>
);

PlayerComponent.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onShuffleClick: propTypes.func.isRequired,
  onRepeatClick: propTypes.func.isRequired,
  onForwardClick: propTypes.func.isRequired,
  onRewindClick: propTypes.func.isRequired,
  onPlayClick: propTypes.func.isRequired,
};

export default PlayerComponent;
