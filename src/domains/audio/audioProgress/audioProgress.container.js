import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import {
  getNumericValueFromDOMEvent,
  convertProgressToCurrentTime,
  updateProgress,
} from './audioProgress.utils';

import AudioProgressComponent from './audioProgress.component';

const AudioProgressContainer = ({ audioRef, updateCurrentTime }) => {
  const [progress, setProgress] = useState(0);
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const handleDragging = () => setIsBeingDragged(true);

  const handleStopDragging = () => {
    const { duration } = audioRef;
    updateCurrentTime(convertProgressToCurrentTime(progress, duration));
    setIsBeingDragged(false);
  };

  const handleSetProgress = (input) => {
    const nextProgress = getNumericValueFromDOMEvent(input);
    setProgress(nextProgress);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateProgress(isBeingDragged, audioRef)
        .then((progressValue) => {
          setProgress(progressValue);
        })
        .catch(() => {
          setProgress(progress);
        });
    }, 1000);

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
  audioRef: propTypes.instanceOf(Audio).isRequired,
  updateCurrentTime: propTypes.func.isRequired,
};

export default AudioProgressContainer;
