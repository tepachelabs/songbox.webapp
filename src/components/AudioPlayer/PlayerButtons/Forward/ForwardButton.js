import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlayerButton from '../PlayerButton';

import { playNextSong } from 'store/actions/playerActions';
import { canPlayNextSong } from 'store/selectors/songsQueue';

import fastForwardIcon from '../../icons/fast-forward.svg';

const ForwardButton = () => {
  const onRepeat = useSelector((state) => state.player.get('onRepeat'));
  const canFastForward = useSelector((state) => canPlayNextSong(state));

  const isDisabled = !onRepeat && !canFastForward;

  const classStatus = isDisabled ? 'disable-buttons' : '';
  const dispatch = useDispatch();

  return (
    <PlayerButton
      classStatus={classStatus}
      handleOnClick={() => dispatch(playNextSong())}
      icon={fastForwardIcon}
      isDisabled={isDisabled}
    />
  );
};

export default ForwardButton;
