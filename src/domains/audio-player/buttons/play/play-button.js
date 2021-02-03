import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectQueueSize } from 'store/selectors/songsQueue';

import { PlayerLargeButton } from 'style/button';
import {
  PlayCircleIcon,
  PauseCircleIcon,
} from 'components/icon';

import {
  darkWhite,
  lightGray,
  white,
} from 'style/colors';

const PlayButton = ({ onClick }) => {
  const isPlaying = useSelector((state) => state.player.get('isPlaying'));
  const queueSize = useSelector((state) => selectQueueSize(state));
  const playCircleFill = queueSize > 0 ? white : lightGray;

  return (
    <PlayerLargeButton onClick={onClick} type="play">
      {
        isPlaying
          ? <PauseCircleIcon stroke={darkWhite} />
          : <PlayCircleIcon stroke={darkWhite} fill={playCircleFill} />
      }
    </PlayerLargeButton>
  );
};

PlayButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default PlayButton;
