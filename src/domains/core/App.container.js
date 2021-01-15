import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFavoritesSongs } from 'store/actions/favoritesActions';
import { createNewSession, recoverSession } from 'store/actions/sessionActions';

import { Loading } from './Loading';
import { AppComponent } from './App.component';
import { selectIsAppLoaded } from './App.selectors';

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

    dispatch(fetchFavoritesSongs());
  }, [dispatch]);

  return isAppLoaded ? <AppComponent /> : <Loading isLoading />;
};
