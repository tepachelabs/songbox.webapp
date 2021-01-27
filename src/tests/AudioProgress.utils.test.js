import {
  getNumericValueFromDOMEvent,
  convertProgressToCurrentTime,
  convertDurationToProgress,
} from 'domains/audio/audioProgress/audioProgress.utils';

describe('get numeric value from DOM event', () => {
  test('it should get the value from the input and convert to integer (50)', () => {
    const input = {
      target: {
        value: '50',
      },
    };

    const number = getNumericValueFromDOMEvent(input);
    expect(number).toBe(50);
  });

  test('it should get the value from the input and convert to integer (100)', () => {
    const input = {
      target: {
        value: '100',
      },
    };

    const number = getNumericValueFromDOMEvent(input);
    expect(number).toBe(100);
  });
});

describe('convert progress to current time', () => {
  test('it should calculate current time and be 60', () => {
    const progress = 50;
    const duration = 120;

    const currentTime = convertProgressToCurrentTime(progress, duration);
    expect(currentTime).toBe(60);
  });

  test('it should calculate current time and be 120', () => {
    const progress = 100;
    const duration = 120;

    const currentTime = convertProgressToCurrentTime(progress, duration);
    expect(currentTime).toBe(120);
  });

  test('it should calculate current time and be 0', () => {
    const progress = 0;
    const duration = 120;

    const currentTime = convertProgressToCurrentTime(progress, duration);
    expect(currentTime).toBe(0);
  });
});

describe('convert duration to progress', () => {
  test('it should calculate the progress and return 50', () => {
    const songDuration = 120;
    const currentTime = 60;

    const progress = convertDurationToProgress(currentTime, songDuration);
    expect(progress).toBe(50);
  });

  test('it should calculate the progress and return 10', () => {
    const songDuration = 120;
    const currentTime = 12;

    const progress = convertDurationToProgress(currentTime, songDuration);
    expect(progress).toBe(10);
  });

  test('it should calculate the progress and return 100', () => {
    const songDuration = 120;
    const currentTime = 120;

    const progress = convertDurationToProgress(currentTime, songDuration);
    expect(progress).toBe(100);
  });
});
