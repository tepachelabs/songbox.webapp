import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LOGIN_PATH } from 'routes';
import { WorkspaceComponent } from './Workspace.component';
import { selectIsSessionToken } from '../App.selectors';

export const Workspace = () => {
  const isSessionToken = useSelector(selectIsSessionToken);

  return isSessionToken
    ? <WorkspaceComponent />
    : <Redirect to={LOGIN_PATH} />;
};
