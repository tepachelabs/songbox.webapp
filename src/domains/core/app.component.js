import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { LOGIN_PATH, APP_PATH, EMPTY_PATH } from 'routes';

import { Login } from 'domains/login';
import NotFound from 'components/NotFound';
import { Workspace } from './workspace';

import { AppWrapper } from './app.style';

const AppComponent = () => (
  <BrowserRouter>
    <AppWrapper>
      <Switch>
        <Route path={LOGIN_PATH} component={Login} />
        <Route path={APP_PATH} component={Workspace} />
        <Redirect strict from={EMPTY_PATH} to={APP_PATH} />
        <Route path="*" component={NotFound} />
      </Switch>
    </AppWrapper>
  </BrowserRouter>
);

export default AppComponent;
