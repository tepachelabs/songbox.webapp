import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { playNextSong } from 'store/actions/playerActions';

import ForwardButtonComponent from './ForwardButton.component';

const ForwardButtonContainer = () => {
  const songIndex = useSelector((state) => state.songsQueue.get('index'));
  const songsQueue = useSelector((state) => state.songsQueue.get('queue'));
  const onRepeat = useSelector((state) => state.player.get('onRepeat'));

  const isDisabled = onRepeat === true ? false : songIndex + 1 >= songsQueue.size;
  const dispatch = useDispatch();

  return (
    <ForwardButtonComponent
      isDisabled={isDisabled}
      playNextSong={() => dispatch(playNextSong())}
    />
  );
};

export default ForwardButtonContainer;
