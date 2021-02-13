import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';

import AudioProgress from 'domains/audio-player/audio-progress/index';
import StyleDecorator from 'stories/decorators/style-decorator';

test('it renders', () => {
  const ref = new Audio();
  const mockFn = jest.fn();

  render(
    <Provider store={store}>
      <StyleDecorator>
        <AudioProgress audioRef={ref} updateCurrentTime={mockFn} />
      </StyleDecorator>
    </Provider>,
  );
});
