import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initErrorLogger } from 'lib/errorLogger';
import store from 'store';
import StyleProvider from 'style/style-provider';
import { App } from 'domains/core';

import 'index.css';

initErrorLogger();

ReactDOM.render(
  <Provider store={store}>
    <StyleProvider>
      <App />
    </StyleProvider>
  </Provider>,
  document.getElementById('root'),
);
