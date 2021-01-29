import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { PlayerButton } from 'style/button';
import {
  PlayCircleIcon,
  PauseCircleIcon,
} from 'components/icon';

import { gray } from 'style/colors';

const PlayButton = ({ onClick }) => {
  const isPlaying = useSelector((state) => state.player.get('isPlaying'));

  return (
    <PlayerButton onClick={onClick}>
      {
        isPlaying
          ? <PauseCircleIcon stroke={gray} />
          : <PlayCircleIcon stroke={gray} />
      }
    </PlayerButton>
  );
};

PlayButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default PlayButton;
