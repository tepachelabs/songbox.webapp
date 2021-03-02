import { combineReducers } from 'redux';

import appReducer from './app';
import filesReducer from './files';
import settingsReducer from './settings';
import userReducer from './user';
import playerReducer from './player';

export default combineReducers({
  app: appReducer,
  files: filesReducer,
  settings: settingsReducer,
  player: playerReducer,
  user: userReducer,
});
