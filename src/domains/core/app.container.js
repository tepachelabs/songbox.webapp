import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { getMobileOperatingSystem } from 'utils';
import { createNewSession, recoverSession } from 'store/actions/sessionActions';
import { setOS } from 'store/actions/appActions';

import { Loading } from './Loading';

const AppComponent = React.lazy(() => import('./app.component'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const retrievedToken = urlParams.get('token');
    const os = getMobileOperatingSystem();

    if (retrievedToken) {
      dispatch(createNewSession(retrievedToken));
    } else {
      dispatch(recoverSession());
    }
    dispatch(setOS(os));
  }, [dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <AppComponent />
    </Suspense>
  );
};
