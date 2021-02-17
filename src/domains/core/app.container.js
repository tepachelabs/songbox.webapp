import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getMobileOperatingSystem } from 'utils';
import { createNewSession, recoverSession } from 'store/actions/sessionActions';
import { setOS } from 'store/actions/appActions';

const AppComponent = React.lazy(() => import('./app.component'));

export const App = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.settings.get('lang'));
  const [, i18next] = useTranslation();
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
    if (lang !== i18next.language) {
      i18next.changeLanguage(lang);
    }
  }, [dispatch, lang]);

  return <AppComponent />;
};
