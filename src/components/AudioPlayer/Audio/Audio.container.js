import React from 'react';
import { useSelector } from 'react-redux';

import AudioComponent from './Audio.component';

const AudioContainer = () => {
  const autoPlay = useSelector((state) => state.settings.get('autoPlay'));
  const songLink = useSelector((state) => state.player.get('songLink'));

  return (
    <AudioComponent
      autoPlay={autoPlay}
      songLink={songLink}
    />
  );
};

export default AudioContainer;
