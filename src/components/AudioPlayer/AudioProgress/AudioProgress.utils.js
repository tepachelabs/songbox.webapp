import { Promise } from 'bluebird';

export const getNumericValueFromDOMEvent = ({ target }) => {
  const { value } = target;
  return parseInt(value, 10);
};

export const convertDurationToProgress = (currentTime, duration) => {
  const progress = (currentTime * 100) / duration;
  return Math.round(progress);
};

export const convertProgressToDuration = (progress, duration) => (duration * progress) / 100;

export const updateProgress = (
  isBeingDragged, songLink, { current },
) => new Promise((resolve, reject) => {
  if (!isBeingDragged && songLink) {
    const { currentTime, duration } = current;
    const progress = convertDurationToProgress(currentTime, duration);
    resolve(progress);
  } else {
    reject(new Error('There\'s nothing currently playing.'));
  }
});
