import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';

import AudioProgress from 'domains/audio-player/audio-progress/index';

test('it renders', () => {
  const ref = new Audio();
  const mockFn = jest.fn();

  render(
    <Provider store={store}>
      <AudioProgress audioRef={ref} updateCurrentTime={mockFn} />
    </Provider>,
  );
});
