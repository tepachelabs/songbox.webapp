import React from 'react';
import { useSelector } from 'react-redux';

import AudioComponent from './Audio.component';

const AudioContainer = () => {
  const songLink = useSelector((state) => state.player.songLink);
  const autoPlay = useSelector((state) => state.player.autoPlay);

  return (
    <AudioComponent
      key={songLink}
      autoPlay={autoPlay}
      songLink={songLink}
    />
  );
};

export default AudioContainer;
