import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import PlayerComponent from './Player';
import AudioProgressContainer from './AudioProgress';

import './style/player.scss';
import './AudioProgress/styles/progress.scss';

const useStyles = makeStyles(() => ({
  audioContainer: {
    background: '#F7F6F6',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '150px',
  },
  audioPlayer: {
    width: '100%',
  },
}));

const AudioPlayerComponent = ({
  audioRef, updateCurrentTime, onClick, isDisabled,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.audioContainer}>
      <AudioProgressContainer
        audioRef={audioRef}
        updateCurrentTime={updateCurrentTime}
      />
      <div className={classes.audioPlayer}>
        <PlayerComponent
          onClick={onClick}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};

AudioPlayerComponent.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
  updateCurrentTime: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired,
};

export default AudioPlayerComponent;
