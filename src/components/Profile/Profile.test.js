import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';
import Profile from './Profile';

describe('Profile component', () => {
  test('It should render', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
  });
});
