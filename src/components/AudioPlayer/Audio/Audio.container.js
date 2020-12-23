import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import AudioComponent from './Audio.component';

const AudioContainer = () => {
  const autoPlay = useSelector((state) => state.settings.get('autoPlay'));
  const songLink = useSelector((state) => state.player.get('songLink'));
  const audioRef = React.createRef();

  useEffect(() => {
    if (audioRef.current && songLink) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [audioRef, songLink]);

  return (
    <AudioComponent
      autoPlay={autoPlay}
      songLink={songLink}
      audioRef={audioRef}
    />
  );
};

export default AudioContainer;
