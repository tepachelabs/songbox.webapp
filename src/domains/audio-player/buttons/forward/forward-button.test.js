import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';
import ForwardButton from './forward-button';

test('It should render', () => {
  const mockFn = jest.fn();
  render(
    <Provider store={store}>
      <ForwardButton onClick={mockFn} />
    </Provider>,
  );
});
