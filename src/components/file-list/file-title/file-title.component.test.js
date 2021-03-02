import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from 'store';
import { FileTitle } from './file-title.component';

test('it should render', () => {
  render(
    <Provider store={store}>
      <FileTitle name="test_song.mp3" />
    </Provider>,
  );
});
