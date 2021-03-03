import { fromJS, Map } from 'immutable';
import { getPreferences, setPreferences } from '../../lib/localStorage';

import {
  SETTINGS_SET_AUTO_PLAY,
  SETTINGS_SET_FULL_FILENAME,
  SETTINGS_SET_DARK_THEME,
  SETTINGS_RESTORE_PREFERENCES,
  SETTINGS_SET_LANG,
} from '../constants';

const defaultState = Map({
  autoPlay: true,
  darkTheme: false,
  fullFilename: false,
  lang: 'en-US',
});
const preferences = getPreferences();
const initialState = preferences ? fromJS(preferences) : defaultState;

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETTINGS_SET_AUTO_PLAY: {
      const newState = state.set('autoPlay', payload);
      setPreferences(newState);
      return newState;
    }
    case SETTINGS_SET_FULL_FILENAME: {
      const newState = state.set('fullFilename', payload);
      setPreferences(newState);
      return newState;
    }
    case SETTINGS_SET_DARK_THEME: {
      const newState = state.set('darkTheme', payload);
      setPreferences(newState);
      return newState;
    }
    case SETTINGS_SET_LANG: {
      const newState = state.set('lang', payload);
      setPreferences(newState);
      return newState;
    }
    case SETTINGS_RESTORE_PREFERENCES:
      setPreferences(defaultState);
      return defaultState;
    default:
      return state;
  }
};

export default settingsReducer;
