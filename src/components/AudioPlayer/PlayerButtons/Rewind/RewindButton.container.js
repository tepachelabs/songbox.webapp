import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { playPreviousSong } from 'store/actions/playerActions';

import RewindButtonComponent from './RewindButton.component';

const RewindButtonContainer = () => {
  const songIndex = useSelector((state) => state.songsQueue.get('index'));
  const isDisabled = songIndex - 1 < 0;

  const dispatch = useDispatch();

  return (
    <RewindButtonComponent
      isDisabled={isDisabled}
      previousSong={() => dispatch(playPreviousSong())}
    />
  );
};

export default RewindButtonContainer;
