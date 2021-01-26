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
  const isRandomEnabled = useSelector((state) => state.player.get('isRandom'));
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const isDisable = songsQueue.size <= 0;

  const dispatch = useDispatch();

  const onRepeatClick = () => {
    dispatch(setRepeat(!isRepeatEnabled));
  };

  const onShuffleClick = () => {
    dispatch(setRandom(!isRandomEnabled));
  };

  const onRewindClick = () => {
    dispatch(playPreviousSong());
  };

  const onForwardClick = () => {
    dispatch(playNextSong());
  };

  const onPlayClick = () => {
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
      onRewindClick={onRewindClick}
      onForwardClick={onForwardClick}
      onShuffleClick={onShuffleClick}
      onRepeatClick={onRepeatClick}
      onPlayClick={onPlayClick}
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
