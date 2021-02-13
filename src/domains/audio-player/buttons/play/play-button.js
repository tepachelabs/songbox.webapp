import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { selectQueueSize } from 'store/selectors/songsQueue';

import { PlayCircleIcon, PauseCircleIcon } from 'components/icon';

import { darkWhite, lightGray, white } from 'style/colors';
import { PlayerButton } from '../player-button';

const PlayButton = ({ onClick }) => {
  const isPlaying = useSelector((state) => state.player.get('isPlaying'));
  const queueSize = useSelector((state) => selectQueueSize(state));
  const playCircleFill = queueSize > 0 ? white : lightGray;
  const theme = useTheme();

  return (
    <PlayerButton onClick={onClick} size="large" theme={theme}>
      {isPlaying ? (
        <PauseCircleIcon stroke={darkWhite} fill={playCircleFill} />
      ) : (
        <PlayCircleIcon stroke={darkWhite} fill={playCircleFill} />
      )}
    </PlayerButton>
  );
};

PlayButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default PlayButton;
