import React from 'react';
import propTypes from 'prop-types';

import PlayerContainer from './Player';
import AudioProgressContainer from './AudioProgress';

import './style/player.scss';
import './AudioProgress/styles/progress.scss';

const AudioPlayerComponent = ({ audioRef, updateCurrentTime }) => (
  <div className="audio-container">
    <AudioProgressContainer
      audioRef={audioRef}
      updateCurrentTime={updateCurrentTime}
    />
    <div className="audio-player">
      <PlayerContainer
        audioRef={audioRef}
      />
    </div>
  </div>
);

AudioPlayerComponent.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
  updateCurrentTime: propTypes.func.isRequired,
};

export default AudioPlayerComponent;
