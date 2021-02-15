import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { LOGIN_PATH, APP_PATH, EMPTY_PATH } from 'routes';

import { Login } from 'domains/login';
import NotFound from 'components/NotFound';
import { Workspace } from './workspace';

import { AppWrapper } from './app.style';

const AppComponent = () => {
  const isLoaded = useSelector((state) => state.app.get('isLoaded'));

  return (
    <BrowserRouter>
      <AppWrapper>
        <Switch>
          <Route path={LOGIN_PATH}>
            {isLoaded ? <Redirect to={APP_PATH} /> : <Login />}
          </Route>
          <Route path={APP_PATH} component={Workspace} />
          <Redirect strict from={EMPTY_PATH} to={APP_PATH} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default AppComponent;
