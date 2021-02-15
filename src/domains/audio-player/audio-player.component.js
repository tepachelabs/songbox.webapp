import React from 'react';
import propTypes from 'prop-types';

import { Loading } from 'domains/core/Loading';
import PlayerComponent from './player';
import AudioProgressContainer from './audio-progress';

import { AudioWrapper } from './audio-player.styles';

const AudioPlayerComponent = ({
  audioRef,
  isDisabled,
  onClick,
  updateCurrentTime,
  isLoading,
}) => {
  if (isLoading)
    return (
      <AudioWrapper>
        <Loading />
      </AudioWrapper>
    );

  return (
    <AudioWrapper>
      <AudioProgressContainer
        audioRef={audioRef}
        updateCurrentTime={updateCurrentTime}
      />
      <PlayerComponent onClick={onClick} isDisabled={isDisabled} />
    </AudioWrapper>
  );
};

AudioPlayerComponent.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
  updateCurrentTime: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired,
};

export default AudioPlayerComponent;
