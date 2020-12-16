import React from 'react';
import { useSelector } from 'react-redux';

import PlayerComponent from './Player.component';

const PlayerContainer = () => {
  const songsQueue = useSelector((state) => state.songsQueue);
  const isDisable = songsQueue.length <= 0;

  return <PlayerComponent isDisabled={isDisable} />;
};

export default PlayerContainer;
