import { Map } from 'immutable';

import {
  SETTINGS_SET_AUTO_PLAY,
  SETTINGS_SET_FULL_FILENAME,
  SETTINGS_SET_DARK_THEME,
  SETTINGS_RESTORE_PREFERENCES,
} from '../constants';

const initialState = Map({
  autoPlay: true,
  darkTheme: false,
  fullFilename: false,
});

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SETTINGS_SET_AUTO_PLAY:
    return state.set('autoPlay', payload);
  case SETTINGS_SET_FULL_FILENAME:
    return state.set('fullFilename', payload);
  case SETTINGS_SET_DARK_THEME:
    return state.set('darkTheme', payload);

  case SETTINGS_RESTORE_PREFERENCES:
    return initialState;

  default:
    return state;
  }
};

export default settingsReducer;
