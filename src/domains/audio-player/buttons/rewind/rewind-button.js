import React from 'react';
import propTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { canPlayPreviousSong } from 'store/selectors/songsQueue';

import { RewindIcon } from 'components/icon';
import { darkWhite } from 'style/colors';
import { PlayerButton } from '../player-button';

const RewindButton = ({ onClick }) => {
  const canRewind = useSelector((state) => canPlayPreviousSong(state));
  const isDisabled = !canRewind;
  const theme = useTheme();

  return (
    <PlayerButton onClick={onClick} disabled={isDisabled} theme={theme}>
      <RewindIcon stroke={darkWhite} fill={darkWhite} />
    </PlayerButton>
  );
};

RewindButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default RewindButton;
