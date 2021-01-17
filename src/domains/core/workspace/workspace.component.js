import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  FAVORITES_PATH, FILE_PATH, HELP_PATH, APP_PATH, SETTINGS_PATH,
} from 'routes';

import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import Favorites from 'components/Favorites';
import Settings from 'components/Settings';
import Help from 'components/Help';
import AudioPlayer from 'components/AudioPlayer';

export const WorkspaceComponent = () => (
  <BrowserRouter>
    <div className="sidebar-container">
      <Sidebar />
    </div>
    <div className="App">
      <Switch>
        <Route path={FAVORITES_PATH} component={Favorites} />
        <Route path={SETTINGS_PATH} component={Settings} />
        <Route path={HELP_PATH} component={Help} />
        <Route path={APP_PATH} exact component={Main} />
        <Route path={FILE_PATH} exact component={Main} />
      </Switch>
    </div>
    <AudioPlayer />
  </BrowserRouter>
);
