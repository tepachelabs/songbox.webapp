import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { canPlayNextSong } from 'store/selectors/songsQueue';
import { PlayerButton } from 'style/button';
import { gray } from 'style/colors';

import { FastForwardIcon } from 'components/icon';

const ForwardButton = ({ onClick }) => {
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const canFastForward = useSelector((state) => canPlayNextSong(state));
  const isDisabled = !isRepeatEnabled && !canFastForward;

  return (
    <PlayerButton onClick={onClick} disabled={isDisabled}>
      <FastForwardIcon stroke={gray} fill={gray} />
    </PlayerButton>
  );
};

ForwardButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ForwardButton;
