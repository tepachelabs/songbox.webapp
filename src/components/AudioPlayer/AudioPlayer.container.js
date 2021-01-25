import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsPlaying, playNextSong } from 'store/actions/playerActions';

import AudioPlayerComponent from './AudioPlayer.component';

const AudioPlayerContainer = () => {
  const songLink = useSelector((state) => state.player.get('songLink'));
  const dispatch = useDispatch();

  const audioRef = new Audio(songLink);

  useEffect(() => {
    const playMusic = () => {
      audioRef.play()
        .then(() => {
          dispatch(setIsPlaying(true));
        })
        .catch(() => {
          dispatch(setIsPlaying(false));
        });
    };

    const onPause = () => {
      if (audioRef.ended) {
        dispatch(playNextSong());
      }
    };

    audioRef.addEventListener('canplaythrough', playMusic, false);
    audioRef.addEventListener('pause', onPause, false);

    return () => {
      audioRef.removeEventListener('canplaythrough', playMusic, false);
      audioRef.removeEventListener('pause', onPause, false);
      audioRef.pause();
    };
  }, [audioRef, songLink, dispatch]);

  const updateCurrentTime = (second) => {
    audioRef.currentTime = second;
  };

  return (
    <AudioPlayerComponent
      audioRef={audioRef}
      updateCurrentTime={updateCurrentTime}
    />
  );
};

export default AudioPlayerContainer;
