import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initErrorLogger } from 'lib/errorLogger';
import store from 'store';
import StyleProvider from 'style/style-provider';
import { App } from 'domains/core';
import { Loading } from './domains/core/Loading';

import 'translations';
import 'index.css';

initErrorLogger();

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <StyleProvider>
        <App />
      </StyleProvider>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
