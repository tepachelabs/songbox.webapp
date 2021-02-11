import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';

import { darkWhite, orange } from 'style/colors';

import { RepeatIcon } from 'components/icon';
import { PlayerButton } from '../player-button';

const RepeatButton = ({ onClick }) => {
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeat'));
  const strokeColor = isRepeatEnabled ? orange : darkWhite;
  const theme = useTheme();

  return (
    <PlayerButton onClick={onClick} theme={theme}>
      <RepeatIcon stroke={strokeColor} />
    </PlayerButton>
  );
};

RepeatButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default RepeatButton;
