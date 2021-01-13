import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNewSession, recoverSession } from 'store/actions/sessionActions';
import { fetchFavoritesSongs } from 'store/actions/favoritesActions';
import AppComponent from './App.component';
import LoadingComponent from './Loading';

const App = () => {
  const isAppLoaded = useSelector((state) => state.app.get('isLoaded'));
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const retrievedToken = urlParams.get('token');

    if (retrievedToken) {
      dispatch(createNewSession(retrievedToken));
      window.history.replaceState({}, document.title, '/app');
    } else {
      dispatch(recoverSession());
      window.history.replaceState({}, document.title, '/app');
    }

    dispatch(fetchFavoritesSongs());
  }, [dispatch]);

  return isAppLoaded ? <AppComponent /> : <LoadingComponent isLoading={!isAppLoaded} />;
};

export default App;
