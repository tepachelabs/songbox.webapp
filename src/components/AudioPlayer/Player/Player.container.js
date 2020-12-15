import React from 'react';
import { useSelector } from 'react-redux';

import PlayerComponent from './Player.component';

const PlayerContainer = () => {
  const queueExists = useSelector((state) => state.songsQueue);
  const isDisable = queueExists.length <= 0;

  return <PlayerComponent isDisabled={isDisable} />;
};

export default PlayerContainer;
