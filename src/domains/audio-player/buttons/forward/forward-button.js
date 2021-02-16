import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';

import { canPlayNextSong, selectQueueSize } from 'store/selectors/songsQueue';
import { darkWhite, gray } from 'style/colors';

import { FastForwardIcon } from 'components/icon';
import { PlayerButton } from '../player-button';

const ForwardButton = ({ onClick }) => {
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const isRandomEnabled = useSelector((state) => state.player.get('isRandom'));
  const canFastForward = useSelector((state) => canPlayNextSong(state));
  const queueSize = useSelector((state) => selectQueueSize(state));
  const hasButtonPlayerActives = isRandomEnabled || isRepeatEnabled;
  const isDisabled =
    queueSize > 1 ? !canFastForward && !hasButtonPlayerActives : true;
  const buttonColor = isDisabled ? gray : darkWhite;
  const theme = useTheme();

  return (
    <PlayerButton onClick={onClick} disabled={isDisabled} theme={theme}>
      <FastForwardIcon stroke={buttonColor} fill={buttonColor} />
    </PlayerButton>
  );
};

ForwardButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ForwardButton;
