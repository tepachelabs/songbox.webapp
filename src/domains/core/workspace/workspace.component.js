import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  FAVORITES_PATH,
  FILE_PATH,
  HELP_PATH,
  APP_PATH,
  SETTINGS_PATH,
} from 'routes';

import { Page } from 'components/page';
import { Loading } from '../Loading';

const Main = React.lazy(() => import('domains/main'));
const Favorites = React.lazy(() => import('domains/favorites'));
const Settings = React.lazy(() => import('domains/settings'));
const Help = React.lazy(() => import('domains/help'));
const AudioPlayer = React.lazy(() => import('domains/audio-player'));

export const WorkspaceComponent = () => {
  const [t] = useTranslation();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={FAVORITES_PATH}>
            <Page title={t('favorites.title')}>
              <Favorites />
            </Page>
          </Route>
          <Route path={SETTINGS_PATH}>
            <Page title={t('settings.title')}>
              <Settings />
            </Page>
          </Route>
          <Route path={HELP_PATH} exact>
            <Page title={t('help.title')}>
              <Help />
            </Page>
          </Route>
          <Route path={APP_PATH} exact>
            <Page title={t('home.title')}>
              <Main />
            </Page>
          </Route>
          <Route path={FILE_PATH} exact>
            <Page title={t('home.title')}>
              <Main />
            </Page>
          </Route>
        </Switch>
      </Suspense>
      <AudioPlayer />
    </BrowserRouter>
  );
};
