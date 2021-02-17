import { Map } from 'immutable';
import { getPreferences, setPreferences } from '../../lib/localStorage';

import {
  SETTINGS_SET_AUTO_PLAY,
  SETTINGS_SET_FULL_FILENAME,
  SETTINGS_SET_DARK_THEME,
  SETTINGS_RESTORE_PREFERENCES,
  SETTINGS_SET_LANG,
} from '../constants';

let initialState;
const preferences = getPreferences();
if (!preferences) {
  initialState = Map({
    autoPlay: true,
    darkTheme: false,
    fullFilename: false,
    lang: 'en-US',
  });
} else {
  initialState = Map(preferences);
}

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETTINGS_SET_AUTO_PLAY:
      setPreferences({ ...state.toJS(), autoPlay: payload });
      return state.set('autoPlay', payload);
    case SETTINGS_SET_FULL_FILENAME:
      setPreferences({ ...state.toJS(), fullFilename: payload });
      return state.set('fullFilename', payload);
    case SETTINGS_SET_DARK_THEME:
      setPreferences({ ...state.toJS(), darkTheme: payload });
      return state.set('darkTheme', payload);
    case SETTINGS_SET_LANG:
      setPreferences({ ...state.toJS(), lang: payload });
      return state.set('lang', payload);
    case SETTINGS_RESTORE_PREFERENCES:
      return initialState;

    default:
      return state;
  }
};

export default settingsReducer;
