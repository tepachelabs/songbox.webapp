import React from 'react';
import propTypes from 'prop-types';

import {
  RepeatButton,
  RewindButton,
  PlayButton,
  ForwardButton,
  ShuffleButton,
} from '../buttons';

const PlayerComponent = ({
  isDisabled,
  onClick,
}) => (
  <div className={`buttons ${isDisabled ? 'disable-buttons' : ''}`}>
    <div className="buttons-container">
      <RepeatButton onClick={onClick('repeat')} />
      <RewindButton onClick={onClick('rewind')} />
      <PlayButton onClick={onClick('play')} />
      <ForwardButton onClick={onClick('forward')} />
      <ShuffleButton onClick={onClick('random')} />
    </div>
  </div>
);

PlayerComponent.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

export default PlayerComponent;
