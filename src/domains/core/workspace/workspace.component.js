import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  FAVORITES_PATH,
  FILE_PATH,
  HELP_PATH,
  APP_PATH,
  SETTINGS_PATH,
} from 'routes';

import { Sidebar } from 'components/sidebar';
import { UserProfile } from 'components/user-profile';
import { Loading } from '../Loading';

import { AppWrapper, MenuWrapper } from './workspace.style';

const Main = React.lazy(() => import('domains/main'));
const Favorites = React.lazy(() => import('domains/favorites'));
const Settings = React.lazy(() => import('components/Settings'));
const Help = React.lazy(() => import('domains/help'));
const AudioPlayer = React.lazy(() => import('domains/audio-player'));

export const WorkspaceComponent = () => (
  <BrowserRouter>
    <MenuWrapper>
      <Sidebar>
        <UserProfile />
      </Sidebar>
    </MenuWrapper>
    <AppWrapper>
      <Suspense fallback={Loading}>
        <Switch>
          <Route path={FAVORITES_PATH} component={Favorites} />
          <Route path={SETTINGS_PATH} component={Settings} />
          <Route path={HELP_PATH} component={Help} />
          <Route path={APP_PATH} exact component={Main} />
          <Route path={FILE_PATH} exact component={Main} />
        </Switch>
      </Suspense>
    </AppWrapper>
    <AudioPlayer />
  </BrowserRouter>
);
