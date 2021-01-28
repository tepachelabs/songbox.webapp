import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';
import RewindButton from './rewind-button';

test('It should render', () => {
  const mockFn = jest.fn();

  render(
    <Provider store={store}>
      <RewindButton onClick={mockFn} />
    </Provider>,
  );
});
