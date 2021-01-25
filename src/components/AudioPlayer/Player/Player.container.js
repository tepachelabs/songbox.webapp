import React from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  setIsPlaying,
  setRandom,
  setRepeat,
  playPreviousSong,
  playNextSong,
} from 'store/actions/playerActions';
import PlayerComponent from './Player.component';

const PlayerContainer = ({ audioRef }) => {
  const songsQueue = useSelector((state) => state.songsQueue.get('queue'));
  const isPlaying = useSelector((state) => state.player.get('isPlaying'));
  const isRandomEnabled = useSelector((state) => state.player.get('isRandomEnabled'));
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeatEnabled'));
  const isDisable = songsQueue.size <= 0;

  const dispatch = useDispatch();

  const toggleRepeat = () => {
    dispatch(setRepeat(!isRepeatEnabled));
  };

  const toggleRandom = () => {
    dispatch(setRandom(!isRandomEnabled));
  };

  const rewind = () => {
    dispatch(playPreviousSong());
  };

  const fastForward = () => {
    dispatch(playNextSong());
  };

  const play = () => {
    if (isPlaying) {
      audioRef.pause();
      dispatch(setIsPlaying(false));
    } else {
      audioRef.play();
      dispatch(setIsPlaying(true));
    }
  };

  return (
    <PlayerComponent
      isDisabled={isDisable}
      rewind={rewind}
      fastForward={fastForward}
      toggleRandom={toggleRandom}
      toggleRepeat={toggleRepeat}
      play={play}
    />
  );
};

PlayerContainer.propTypes = {
  audioRef: propTypes.shape({
    current: propTypes.node,
    pause: propTypes.func,
    play: propTypes.func,
  }).isRequired,
};

export default PlayerContainer;
