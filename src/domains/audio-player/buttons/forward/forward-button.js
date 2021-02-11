import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';

import { canPlayNextSong } from 'store/selectors/songsQueue';
import { darkWhite } from 'style/colors';

import { FastForwardIcon } from 'components/icon';
import { PlayerButton } from '../player-button';

const ForwardButton = ({ onClick }) => {
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const canFastForward = useSelector((state) => canPlayNextSong(state));
  const isDisabled = !isRepeatEnabled && !canFastForward;
  const theme = useTheme();

  return (
    <PlayerButton onClick={onClick} disabled={isDisabled} theme={theme}>
      <FastForwardIcon stroke={darkWhite} fill={darkWhite} />
    </PlayerButton>
  );
};

ForwardButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ForwardButton;
