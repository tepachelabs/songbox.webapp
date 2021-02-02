import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { canPlayNextSong } from 'store/selectors/songsQueue';
import { PlayerRegularButton } from 'style/button';
import { darkGray } from 'style/colors';

import { FastForwardIcon } from 'components/icon';

const ForwardButton = ({ onClick }) => {
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const canFastForward = useSelector((state) => canPlayNextSong(state));
  const isDisabled = !isRepeatEnabled && !canFastForward;

  return (
    <PlayerRegularButton onClick={onClick} disabled={isDisabled}>
      <FastForwardIcon stroke={darkGray} fill={darkGray} />
    </PlayerRegularButton>
  );
};

ForwardButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ForwardButton;
