import React from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setIsPlaying } from 'store/actions/playerActions';

import PlayComponent from './Play.component';

const PlayContainer = ({ audioRef }) => {
  const isPlaying = useSelector((state) => state.player.get('isPlaying'));
  const dispatch = useDispatch();

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
    <PlayComponent
      isPlaying={isPlaying}
      play={play}
    />
  );
};

PlayContainer.propTypes = {
  audioRef: propTypes.instanceOf(Audio).isRequired,
};

export default PlayContainer;
