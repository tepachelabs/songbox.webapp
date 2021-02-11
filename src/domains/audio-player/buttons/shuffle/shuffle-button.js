import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';

import { ShuffleIcon } from 'components/icon';
import { darkWhite, orange } from 'style/colors';
import { PlayerButton } from '../player-button';

const ShuffleButton = ({ onClick }) => {
  const isRandomEnabled = useSelector((state) => state.player.get('isRandom'));
  const strokeColor = isRandomEnabled ? orange : darkWhite;
  const theme = useTheme();

  return (
    <PlayerButton onClick={onClick} theme={theme}>
      <ShuffleIcon stroke={strokeColor} />
    </PlayerButton>
  );
};

ShuffleButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ShuffleButton;
