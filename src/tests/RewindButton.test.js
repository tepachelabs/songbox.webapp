import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import RewindButton from 'components/AudioPlayer/PlayerButtons/Rewind';

import store from 'store';

test('It should render', () => {
  render(
    <Provider store={store}>
      <RewindButton />
    </Provider>,
  );
});
