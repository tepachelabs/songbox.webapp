import { combineReducers } from 'redux';

import appReducer from './app';
import filesReducer from './files';
import settings from './settings';
import slidebar from './slideBar';
import songsQueue from './songsQueue';
import auth from './auth';
import user from './user';
import player from './player';
import favorites from './favorites';
import brokenLinks from './brokenLinks';
import menu from './menu';

export default combineReducers({
  app: appReducer,
  auth,
  brokenLinks,
  favorites,
  files: filesReducer,
  menu,
  player,
  settings,
  slidebarIndex: slidebar,
  songsQueue,
  user,
});
