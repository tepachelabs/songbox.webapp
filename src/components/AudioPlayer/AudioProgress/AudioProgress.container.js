import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import AudioProgressComponent from './AudioProgress.component';

const AudioProgressContainer = ({ audioRef }) => {
  const [progress, setProgress] = useState(0);
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const changeSongSecond = (moveTo) => {
    setProgress(moveTo);
  };

  const stopDragging = () => {
    const { duration } = audioRef.current;
    // eslint-disable-next-line no-param-reassign
    audioRef.current.currentTime = Number.isNaN(progress) ? 0 : (duration * progress) / 100;
    audioRef.current.play();
    setIsBeingDragged(false);
  };

  const calculateSongProgress = () => {
    const percentage = (audioRef.current.currentTime * 100) / audioRef.current.duration;
    return Number.isNaN(percentage) ? 0 : percentage;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBeingDragged) {
        setProgress(calculateSongProgress());
      }
    }, 333);

    return () => clearInterval(interval);
  });

  return (
    <AudioProgressComponent
      progress={progress}
      changeSongSecond={changeSongSecond}
      startDragging={() => setIsBeingDragged(true)}
      stopDragging={stopDragging}
    />
  );
};

AudioProgressContainer.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
};

export default AudioProgressContainer;
