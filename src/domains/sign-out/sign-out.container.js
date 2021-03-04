import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { EMPTY_PATH, LOGIN_PATH } from 'routes';
import { setAppIsLoading, updateAppToken } from 'store/actions/appActions';
import { destroySession } from 'lib/localStorage';

export const SignOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppIsLoading());
    dispatch(updateAppToken(null));
    destroySession();
  }, []);

  return <Redirect strict from={EMPTY_PATH} to={LOGIN_PATH} />;
};
