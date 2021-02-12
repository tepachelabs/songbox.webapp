import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import store from 'store';

import AudioProgress from 'domains/audio-player/audio-progress/index';

test('it renders', () => {
  const ref = new Audio();
  const mockFn = jest.fn();
  const mockTheme = {
    spacing: {
      one: 1
    }
  };

  render(
    <Provider store={store}>
      <ThemeProvider theme={mockTheme}>
        <AudioProgress audioRef={ref} updateCurrentTime={mockFn} />
      </ThemeProvider>
    </Provider>,
  );
});
