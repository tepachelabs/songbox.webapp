import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import {
  getNumericValueFromDOMEvent,
  convertProgressToCurrentTime,
  updateProgress,
} from './AudioProgress.utils';

import AudioProgressComponent from './AudioProgress.component';

const AudioProgressContainer = ({ audioRef }) => {
  const songLink = useSelector((state) => state.player.get('songLink'));

  const [progress, setProgress] = useState(0);
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const handleDragging = () => setIsBeingDragged(true);

  const handleStopDragging = () => {
    const { duration } = audioRef.current;
    // eslint-disable-next-line no-param-reassign
    audioRef.current.currentTime = convertProgressToCurrentTime(progress, duration);
    setIsBeingDragged(false);
  };

  const handleSetProgress = (input) => {
    const nextProgress = getNumericValueFromDOMEvent(input);
    setProgress(nextProgress);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateProgress(isBeingDragged, songLink, audioRef)
        .then((progressValue) => {
          setProgress(progressValue);
        })
        .catch(() => {
          setProgress(0);
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
  audioRef: propTypes.shape({ current: propTypes.node }).isRequired,
};

export default AudioProgressContainer;
