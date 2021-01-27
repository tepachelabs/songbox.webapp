import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import ForwardButton from 'domains/audio/playerButtons/forward';

import store from 'store';

test('It should render', () => {
  render(
    <Provider store={store}>
      <ForwardButton />
    </Provider>,
  );
});
