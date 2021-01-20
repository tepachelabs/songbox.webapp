import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNewSession, recoverSession } from 'store/actions/sessionActions';

import { Loading } from './Loading';
import { AppComponent } from './app.component';
import { selectIsAppLoaded } from './app.selectors';

export const App = () => {
  const isAppLoaded = useSelector(selectIsAppLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const retrievedToken = urlParams.get('token');

    if (retrievedToken) {
      dispatch(createNewSession(retrievedToken));
    } else {
      dispatch(recoverSession());
    }
  }, [dispatch]);

  return isAppLoaded ? <AppComponent /> : <Loading isLoading />;
};
