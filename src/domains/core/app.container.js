import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { getMobileOperatingSystem } from 'utils';

import { createNewSession, recoverSession } from 'store/actions/sessionActions';
import { setOS } from 'store/actions/appActions';
import { Loading } from './Loading';

const AppComponent = React.lazy(() => import('./app.component'));

export const App = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.settings.get('darkTheme'));
  const theme = createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
    },
  });

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppComponent />
      </ThemeProvider>
    </Suspense>
  );
};
