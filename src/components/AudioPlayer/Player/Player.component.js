import React from 'react';
import propTypes from 'prop-types';

import {
  RepeatButton,
  RewindButton,
  PlayContainer,
  ForwardButton,
  Shuffle,
} from '../PlayerButtons';

const PlayerComponent = ({ isDisabled, audioRef }) => (
  <div className={`buttons ${isDisabled ? 'disable-buttons' : ''}`}>
    <div className="buttons-container">
      <RepeatButton />
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
