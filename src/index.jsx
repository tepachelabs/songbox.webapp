import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'domains/core';
import store from 'store';
import { initErrorLogger } from 'lib/errorLogger';
import 'styles/index.scss';

initErrorLogger();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
