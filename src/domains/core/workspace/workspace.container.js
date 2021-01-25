import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LOGIN_PATH } from 'routes';
import { fetchFavoritesSongs } from 'store/actions/favoritesActions';
import { WorkspaceComponent } from './workspace.component';
import { selectIsSessionToken } from '../app.selectors';

export const Workspace = () => {
  const isSessionToken = useSelector(selectIsSessionToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesSongs());
  }, [dispatch]);

  return isSessionToken
    ? <WorkspaceComponent />
    : <Redirect to={LOGIN_PATH} />;
};
