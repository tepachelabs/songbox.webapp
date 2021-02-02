import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { PlayerLargeButton } from 'style/button';
import {
  PlayCircleIcon,
  PauseCircleIcon,
} from 'components/icon';

import { darkGray } from 'style/colors';

const PlayButton = ({ onClick }) => {
  const isPlaying = useSelector((state) => state.player.get('isPlaying'));

  return (
    <PlayerLargeButton onClick={onClick} type="play">
      {
        isPlaying
          ? <PauseCircleIcon stroke={darkGray} />
          : <PlayCircleIcon stroke={darkGray} />
      }
    </PlayerLargeButton>
  );
};

PlayButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default PlayButton;
