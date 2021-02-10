import React from 'react';
import propTypes from 'prop-types';

import {
  RepeatButton,
  RewindButton,
  PlayButton,
  ForwardButton,
  ShuffleButton,
} from '../buttons';

import { ButtonsWrapper } from './player.styles';

const PlayerComponent = ({ isDisabled, onClick }) => (
  <ButtonsWrapper isDisabled={isDisabled}>
    <RepeatButton onClick={onClick('repeat')} />
    <RewindButton onClick={onClick('rewind')} />
    <PlayButton onClick={onClick('play')} />
    <ForwardButton onClick={onClick('forward')} />
    <ShuffleButton onClick={onClick('random')} />
  </ButtonsWrapper>
);

PlayerComponent.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

export default PlayerComponent;
