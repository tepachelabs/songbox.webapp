import { fromJS, Map } from 'immutable';
import { getPreferences, setPreferences } from '../../lib/localStorage';

import {
  SETTINGS_SET_APP_LANGUAGE,
  SETTINGS_SET_IS_AUTO_PLAY,
  SETTINGS_SET_IS_DARK_THEME,
  SETTINGS_SET_IS_FULL_FILENAME,
  SETTINGS_RESTORE_PREFERENCES,
} from '../constants';

const defaultState = Map({
  isAutoPlay: true,
  isDarkTheme: false,
  isFullFilename: false,
  appLanguage: 'en-US',
});
const preferences = getPreferences();
const initialState = preferences ? fromJS(preferences) : defaultState;

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETTINGS_SET_APP_LANGUAGE: {
      const newState = state.set('appLanguage', payload);
      setPreferences(newState);
      return newState;
    }
    case SETTINGS_SET_IS_AUTO_PLAY: {
      const newState = state.set('isAutoPlay', payload);
      setPreferences(newState);
      return newState;
    }
    case SETTINGS_SET_IS_DARK_THEME: {
      const newState = state.set('isDarkTheme', payload);
      setPreferences(newState);
      return newState;
    }
    case SETTINGS_SET_IS_FULL_FILENAME: {
      const newState = state.set('isFullFilename', payload);
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
