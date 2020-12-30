export const convertDurationToProgress = (currentTime, duration) => {
  const percentage = (currentTime * 100) / duration;
  return Number.isNaN(percentage) ? 0 : percentage;
};

export const convertInputToProgress = (e) => {
  const { value } = e.target;
  return parseInt(value, 10);
};

export const convertProgressToDuration = (progress, duration) => (duration * progress) / 100;
