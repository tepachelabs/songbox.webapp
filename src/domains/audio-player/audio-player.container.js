import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setIsPlaying, playNextSong, setRepeat, setRandom, playPreviousSong,
} from 'store/actions/playerActions';

import AudioPlayerComponent from './audio-player.component';

const AudioPlayerContainer = () => {
  const songLink = useSelector((state) => state.player.get('songLink'));
  const songsQueue = useSelector((state) => state.songsQueue.get('queue'));
  const isPlaying = useSelector((state) => state.player.get('isPlaying'));
  const isRandomEnabled = useSelector((state) => state.player.get('isRandomEnabled'));
  const isRepeatEnabled = useSelector((state) => state.player.get('isRepeatEnabled'));
  const isDisabled = songsQueue.size <= 0;
  const dispatch = useDispatch();
  const [audio] = useState(new Audio(songLink));

  const playerActions = {
    forward: () => dispatch(playNextSong()),
    rewind: () => dispatch(playPreviousSong()),
    repeat: () => dispatch(setRepeat(!isRepeatEnabled)),
    random: () => dispatch(setRandom(!isRandomEnabled)),
    play: () => {
      if (isPlaying) {
        dispatch(setIsPlaying(false));
      } else {
        dispatch(setIsPlaying(true));
      }
    },
  };

  useEffect(() => {
    audio.src = songLink;
  }, [songLink, audio, audio.src]);

  useEffect(() => {
    if (songLink) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  }, [isPlaying, songLink, audio]);

  const onClick = (action) => (e) => {
    e.preventDefault();
    const exec = playerActions[action];
    if (exec) {
      exec();
    }
  };

  const updateCurrentTime = (second) => {
    audio.currentTime = second;
  };

  return (
    <AudioPlayerComponent
      audioRef={audio}
      updateCurrentTime={updateCurrentTime}
      onClick={onClick}
      isDisabled={isDisabled}
    />
  );
};

export default AudioPlayerContainer;
