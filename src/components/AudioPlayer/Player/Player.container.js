import React from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setRandom } from 'store/actions/playerActions';
import PlayerComponent from './Player.component';

const PlayerContainer = ({ audioRef }) => {
  const songsQueue = useSelector((state) => state.songsQueue.get('queue'));
  const isRandomEnabled = useSelector((state) => state.player.get('onRandom'));
  const isDisable = songsQueue.size <= 0;

  const dispatch = useDispatch();

  const toggleIsRandom = () => {
    dispatch(setRandom(!isRandomEnabled));
  };

  return (
    <PlayerComponent
      isDisabled={isDisable}
      audioRef={audioRef}
      toggleIsRandom={toggleIsRandom}
    />
  );
};

PlayerContainer.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
};

export default PlayerContainer;
