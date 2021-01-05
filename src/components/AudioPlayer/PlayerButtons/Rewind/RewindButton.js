import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { playPreviousSong } from 'store/actions/playerActions';
import { canPlayPreviousSong } from 'store/selectors/songsQueue';
import PlayerButton from '../PlayerButton';

import rewindIcon from '../../icons/rewind.svg';

const RewindButton = () => {
  const canRewind = useSelector((state) => canPlayPreviousSong(state));
  const isDisabled = !canRewind;

  const dispatch = useDispatch();

  return (
    <PlayerButton
      handleOnClick={() => dispatch(playPreviousSong())}
      icon={rewindIcon}
      isDisabled={isDisabled}
    />
  );
};

export default RewindButton;
