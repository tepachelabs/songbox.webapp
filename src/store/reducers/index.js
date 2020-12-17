import { combineReducers } from 'redux';

import appReducer from './app';
import filesReducer from './files';
import settingsReducer from './settings';
import sidebarReducer from './sidebar';
import songsQueueReducer from './songsQueue';
import userReducer from './user';
import playerReducer from './player';
import favoritesReducer from './favorites';

export default combineReducers({
  app: appReducer,
  favorites: favoritesReducer,
  files: filesReducer,
  settings: settingsReducer,
  sidebar: sidebarReducer,
  songsQueue: songsQueueReducer,
  player: playerReducer,
  user: userReducer,
});
