import { Promise } from 'bluebird';

export const getNumericValueFromDOMEvent = ({ target }) => {
  const { value } = target;
  return parseInt(value, 10);
};

export const convertDurationToProgress = (currentTime, duration) => {
  const progress = (currentTime * 100) / duration;
  return Math.round(progress);
};

export const convertProgressToCurrentTime = (progress, duration) =>
  (duration * progress) / 100;

export const updateProgress = (isBeingDragged, audioRef) =>
  new Promise((resolve, reject) => {
    if (!isBeingDragged && audioRef.duration) {
      const { currentTime, duration } = audioRef;
      const progress = convertDurationToProgress(currentTime, duration);
      resolve(progress);
    } else {
      reject(new Error("There's nothing currently playing."));
    }
  });
