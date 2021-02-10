import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { APP_PATH } from 'routes';
import { LoginComponent } from './login.component';

export const Login = () => {
  const isValidSession = useSelector((state) =>
    state.app.get('isValidSession'),
  );

  return isValidSession ? <Redirect to={APP_PATH} /> : <LoginComponent />;
};
