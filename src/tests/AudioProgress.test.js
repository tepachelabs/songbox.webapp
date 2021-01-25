import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';

import AudioProgress from 'components/AudioPlayer/AudioProgress';

test('it renders', () => {
  const ref = React.createRef();
  const mockFn = jest.fn();

  render(
    <Provider store={store}>
      <AudioProgress
        audioRef={ref}
        updateCurrentTime={mockFn}
      />
    </Provider>,
  );
});
