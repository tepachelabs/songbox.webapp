import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getMobileOperatingSystem } from 'utils';
import { createNewSession, recoverSession } from 'store/actions/sessionActions';
import { setOS } from 'store/actions/appActions';

const AppComponent = React.lazy(() => import('./app.component'));

export const App = () => {
  const dispatch = useDispatch();
  const [, i18next] = useTranslation();
  const appLanguage = useSelector(({ settings }) =>
    settings.get('appLanguage'),
  );

  useEffect(() => {
    const mobileOS = getMobileOperatingSystem();
    dispatch(setOS(mobileOS));
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const retrievedToken = urlParams.get('token');

    if (retrievedToken) {
      dispatch(createNewSession(retrievedToken));
    } else {
      dispatch(recoverSession());
    }
  }, [dispatch]);

  useEffect(() => {
    if (appLanguage !== i18next.language) {
      i18next.changeLanguage(appLanguage);
    }
  }, [appLanguage]);

  return <AppComponent />;
};
