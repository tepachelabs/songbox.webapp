import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsPlaying } from 'store/actions/playerActions';

import AudioPlayerComponent from './AudioPlayer.component';

const AudioPlayerContainer = () => {
  const autoPlay = useSelector((state) => state.settings.get('autoPlay'));
  const songLink = useSelector((state) => state.player.get('songLink'));
  const dispatch = useDispatch();

  const audioRef = React.createRef();

  useEffect(() => {
    if (audioRef.current && songLink) {
      audioRef.current.load();
      audioRef.current.play()
        .then(() => {
          dispatch(setIsPlaying(true));
        })
        .catch(() => {
          dispatch(setIsPlaying(false));
        });
    }
  }, [audioRef, dispatch, songLink]);

  return (
    <AudioPlayerComponent
      autoPlay={autoPlay}
      songLink={songLink}
      audioRef={audioRef}
    />
  );
};

export default AudioPlayerContainer;
