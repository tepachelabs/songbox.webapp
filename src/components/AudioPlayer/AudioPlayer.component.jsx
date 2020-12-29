import React from 'react';
import propTypes from 'prop-types';

import PlayerContainer from './Player';
import AudioProgressContainer from './AudioProgress';

import './style/player.scss';
import './style/progress.scss';

const AudioPlayerComponent = ({ autoPlay, songLink, audioRef }) => (
  <div className="audio-container">
    <div className="audio">
      <audio controls ref={audioRef} autoPlay={autoPlay}>
        <track kind="captions" />
        <source src={songLink} type="audio/mpeg" />
        <source src={songLink} type="audio/wav" />
        <source src={songLink} type="audio/ogg" />
      </audio>
    </div>

    <AudioProgressContainer
      audioRef={audioRef}
    />

    <div className="audio-player">
      <PlayerContainer
        audioRef={audioRef}
      />
    </div>
  </div>
);

AudioPlayerComponent.propTypes = {
  autoPlay: propTypes.bool.isRequired,
  songLink: propTypes.string.isRequired,
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
};

export default AudioPlayerComponent;
