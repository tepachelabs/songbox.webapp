import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import PlayerComponent from './Player.component';

const PlayerContainer = ({ audioRef }) => {
  const songsQueue = useSelector((state) => state.songsQueue.get('queue'));
  const isDisable = songsQueue.size <= 0;

  return (
    <PlayerComponent
      isDisabled={isDisable}
      audioRef={audioRef}
    />
  );
};

PlayerContainer.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
};

export default PlayerContainer;
