import React, { Fragment } from 'react';
import { DROPBOX_SIGN_IN_ROUTE } from 'routes';

export const Login = () => (
  <Fragment>
    <h1>Login Screen</h1>
    <a href={DROPBOX_SIGN_IN_ROUTE}>Login with Dropbox™</a>
  </Fragment>
);
