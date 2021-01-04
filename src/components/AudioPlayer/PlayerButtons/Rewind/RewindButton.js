import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlayerButton from '../PlayerButton';

import { playPreviousSong } from 'store/actions/playerActions';
import { canPlayPreviousSong } from 'store/selectors/songsQueue';

import rewindIcon from '../../icons/rewind.svg';

const RewindButton = () => {
  const canRewind = useSelector((state) => canPlayPreviousSong(state));
  const isDisabled = !canRewind;

  const classStatus = isDisabled ? 'disable-buttons' : '';

  const dispatch = useDispatch();

  return (
    <PlayerButton
      classStatus={classStatus}
      handleOnClick={() => dispatch(playPreviousSong())}
      icon={rewindIcon}
      isDisabled={isDisabled}
    />
  );
};

export default RewindButton;
