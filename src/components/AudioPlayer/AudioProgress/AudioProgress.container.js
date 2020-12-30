import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import {
  convertDurationToProgress,
  convertInputToProgress,
  convertProgressToDuration,
} from './songProgress';

import AudioProgressComponent from './AudioProgress.component';

const AudioProgressContainer = ({ audioRef }) => {
  const [progress, setProgress] = useState(0);
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const handleDragging = () => setIsBeingDragged(true);

  const handleStopDragging = () => {
    const { duration } = audioRef.current;
    const nextProgress = convertProgressToDuration(progress, duration);
    // eslint-disable-next-line no-param-reassign
    audioRef.current.currentTime = Number.isNaN(nextProgress) ? 0 : nextProgress;
    setIsBeingDragged(false);
  };

  const handleSetProgress = (input) => {
    const nextProgress = convertInputToProgress(input);
    setProgress(nextProgress);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBeingDragged && audioRef) {
        const { currentTime, duration } = audioRef.current;
        setProgress(convertDurationToProgress(currentTime, duration));
      }
    }, 0);

    return () => clearInterval(interval);
  });

  return (
    <AudioProgressComponent
      progress={progress}
      handleSetProgress={handleSetProgress}
      handleDragging={handleDragging}
      handleStopDragging={handleStopDragging}
    />
  );
};

AudioProgressContainer.propTypes = {
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
};

export default AudioProgressContainer;
