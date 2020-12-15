import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import PlayerContainer from './Player';
import AudioComponent from './Audio';

import './style/player.scss';
import './style/progress.scss';

const AudioPlayerComponent = () => {
  const darkThemeActive = useSelector((state) => state.settings.darkTheme);

  return (
    <div className={`audio-container ${darkThemeActive ? 'dark-theme-background' : ''}`}>
      <AudioComponent />

      <>
        <div className={`audio-player ${darkThemeActive ? 'dark-theme-background' : ''}`}>
          <PlayerContainer />
        </div>
      </>
    </div>
  );
};

export default AudioPlayerComponent;
