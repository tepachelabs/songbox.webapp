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
      audioRef.current.pause();
      dispatch(setIsPlaying(false));
    } else {
      audioRef.current.play();
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
  audioRef: propTypes.shape({ current: propTypes.instanceOf(Node) }).isRequired,
};

export default PlayContainer;
